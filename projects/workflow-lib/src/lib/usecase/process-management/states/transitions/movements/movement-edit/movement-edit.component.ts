import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovementEntity, ProcessEntity, StateEntity } from '../../../../../../common/types';
import { TransitionService } from './../../../../../../common/services/transition.service';
import { ProcessManagementService } from '../../../../../../common/services/process.service';

@Component({
  selector: 'mcb-workflow-movement-edit',
  templateUrl: './movement-edit.component.html'
})
export class MovementEditComponent {
  editMode: boolean;
  processId: number;
  process: ProcessEntity = {} as any;
  movement: MovementEntity = {} as any;
  possibleStates: StateEntity[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProcessManagementService,
    private transitionService: TransitionService) {
    this.processId = +this.activatedRoute.snapshot.params.id;
    this.editMode = isFinite(this.processId);

    if (this.editMode) {
      service.getProcess(this.processId).subscribe(x => this.process = x);
    }

    transitionService.getPossibleStateForMovement(this.processId).subscribe(x => {
      this.possibleStates = x;
    });
  }

  onFormSubmit() {
    let obs: Observable<any>;

    if (this.editMode) {
      this.service.editProcess(this.process);
    } else {
      this.service.createProcess(this.process);
    }
    obs.subscribe(x => {

    });
  }
}
