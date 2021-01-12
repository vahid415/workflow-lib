import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { UIService, BreadcrumbItems, Breadcrumb } from '@navaco/mcb-infra';

import { StateService } from './../../../../../common/services/state.service';
import { TransitionService } from './../../../../../common/services/transition.service';
import { StateEntity, TransitionEntity, MovementEntity, ProcessEntity } from '../../../../../common/types';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

@Component({
  selector: 'mcb-workflow-transition-edit',
  templateUrl: './transition-edit.component.html'
})
export class TransitionEditComponent {

  @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;

  @Breadcrumb() get breadcrumb(): BreadcrumbItems {
    return this.editMode ?
      [
        { textKey: 'states', path: [ '../../../..' ], relativeTo: this.activatedRoute },
        { text: this.state.name },
        { textKey: 'transitions', path: [ '../..' ], relativeTo: this.activatedRoute },
        { text: this.transition.name },
        { textKey: 'edit' }
      ] :

      [
        { textKey: 'states', path: [ '../../..' ], relativeTo: this.activatedRoute },
        { text: this.state.name },
        { textKey: 'transitions', path: [ '..' ], relativeTo: this.activatedRoute },
        { textKey: 'add' }
      ];
  }

  editMode: boolean;
  stateId: number;
  state: StateEntity = {} as StateEntity;
  transition: TransitionEntity = {} as TransitionEntity;
  movement: MovementEntity = {} as MovementEntity;
  movementTemp: MovementEntity = {} as MovementEntity;
  transitionId: number;
  types = [ { text: 'موازی', value: 'FORK' }, { text: 'شرطی', value: 'CONDITIONAL' } ];
  expressionTypeValues = [ { key: 'مساوی', value: '==' }, { key: 'نامساوی', value: '!=' } ];
  gridData;
  processId: number;
  process: ProcessEntity = {} as ProcessEntity;
  addMovementDialogOpened = false;
  possibleStates: StateEntity[];
  expressionKey: string;
  expressionValue: string;
  expressionType: string;
  @ViewChild('addMovementForm') addMovementForm: NgForm;

  constructor(
    public activatedRoute: ActivatedRoute,
    private ui: UIService,
    public router: Router,
    private transitionService: TransitionService,
    private stateService: StateService) {
    this.movement.nextState = {} as StateEntity;
    this.stateId = +this.activatedRoute.snapshot.params.stateId;
    this.processId = +this.activatedRoute.parent.snapshot.params.processId;
    stateService.getState(this.stateId).subscribe(x => { this.state = x; });
    this.transitionId = +this.activatedRoute.snapshot.params.transitionId;
    this.editMode = isFinite(this.transitionId);
    this.transition.process = {} as ProcessEntity;
    this.transition.movements = [] as MovementEntity[];
    this.transition.currentState = {} as StateEntity;
    this.transition.process.id = this.processId;
    this.transition.currentState.id = this.stateId;

    transitionService.getPossibleStateForMovement(this.processId).subscribe(x => {
      this.possibleStates = x;
    });

    if (this.editMode) {
      transitionService.getTransition(this.transitionId).subscribe(x => {
        this.transition = x;
      });
    }
  }

  onFormSubmit() {
    let obs: Observable<any>;
    if (this.transition.type === 'CONDITIONAL' && this.conditionalMovements() < 2) {
      this.ui.showToast('thisMovementIsConditional', { style: 'error' });
    } else {
      if (this.editMode) {
        obs = this.transitionService.editTransition(this.transition);
      } else {
        obs = this.transitionService.createTransition(this.transition);
      }
      obs.subscribe(x => {
        this.ui.showToast('saved');
        this.editMode ?
          this.router.navigate([ '../..' ], { relativeTo: this.activatedRoute }) :
          this.router.navigate([ '..' ], { relativeTo: this.activatedRoute });
      });
    }
  }

  conditionalMovements() {
    return this.transition.movements.filter(x => x.expression !== undefined || x.expression !== null).length;
  }

  onDataStateChange(state: DataStateChangeEvent) { }

  onDeleteMovement(item: MovementEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        var index = this.transition.movements.findIndex(x => x === item);
        this.transition.movements.splice(index, 1);
      });
  }

  onAddMovementClick() {
    this.addMovementDialogOpened = true;
  }

  onCloseNotesWindowClick() {
    this.addMovementDialogOpened = false;
  }

  onAddMovementSubmit() {
    if (this.movement.nextState.id) {
      // if (this.expressionKey && this.expressionType && this.expressionValue) {
      //   this.movement.expression = `${"'" + this.expressionKey + "' "}${this.expressionType}${' #' + this.expressionValue}`;
      // }
      this.transition.movements.push(this.movement);
      this.movement.nextState.name = this.possibleStates.find(el => el.id == this.movement.nextState.id).name;
      this.movement = { nextState: {} } as any;
      this.addMovementForm.resetForm();
    }
  }
}
