import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubsystemExternalRouteConfig, Breadcrumb, BreadcrumbItems, UIService } from '@navaco/mcb-infra';

import { ActionEntity, StateEntity } from '../../../../../common/types';
import { CartableService } from '../../../../cartable/cartable.service';
import { StateService } from './../../../../../common/services/state.service';
import { ActionService } from './../../../../../common/services/action.service';

@Component({
  selector: 'mcb-workflow-action-edit',
  templateUrl: './action-edit.component.html'
})
export class ActionEditComponent {
  @Breadcrumb() get breadcrumb(): BreadcrumbItems {
    return this.editMode ?
      [
        { textKey: 'states', path: ['../..'], relativeTo: this.activatedRoute },
        { text: this.state.name },
        { textKey: 'actions', path: ['../..'], relativeTo: this.activatedRoute },
        { text: this.action.name },
        { textKey: 'edit' }] :

      [
        { textKey: 'states', path: ['../..'], relativeTo: this.activatedRoute },
        { text: this.state.name },
        { textKey: 'actions', path: ['../..'], relativeTo: this.activatedRoute },
        { textKey: 'add' }
      ];
  }

  editMode: boolean;
  stateId: number;
  state: StateEntity = {} as StateEntity;
  action: ActionEntity = {} as ActionEntity;
  stateProcessors = [];
  actionId: number;
  actionTypes = [{ text: 'فراخوانی سرویس', value: 'COMPONENT_RUN' }, { text: 'بازکردن فرم', value: 'SERVICE_CALL' }];
  types = [{ text: 'پس فعالیت', value: 'POST' }, { text: 'پیش فعالیت', value: 'PRE' }, { text: 'بازگشت', value: 'ROLLBACK' }];
  componentType: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ui: UIService,
    private router: Router,
    private stateService: StateService,
    private cartableService: CartableService,
    private service: ActionService) {

    this.stateId = +this.activatedRoute.snapshot.params.stateId;
    stateService.getState(this.stateId).subscribe(x => { this.state = x; });
    this.actionId = +this.activatedRoute.snapshot.params.actionId;
    this.editMode = isFinite(this.actionId);

    if (this.editMode) {
      service.getAction(this.actionId).subscribe(x => {
        this.action = x;
      });
    }

    cartableService.getAllSubsystemsWithStateProcessors()
      .forEach(sys => {
        (sys.externalRoutes as SubsystemExternalRouteConfig).stateProcessorsRoutes.forEach(sp => {
          this.stateProcessors.push(sp);
        });
      });
  }

  onFormSubmit() {
    let obs: Observable<any>;

    if (this.editMode) {
      obs = this.service.editAction(this.action);
    } else {
      obs = this.service.createAction(this.action);
    }
    obs.subscribe(x => {
      this.ui.showToast('saved');
      this.editMode ?
        this.router.navigate(['../..'], { relativeTo: this.activatedRoute }) :
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }
}
