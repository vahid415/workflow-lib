import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { UIService, Breadcrumb, BreadcrumbItems } from '@navaco/mcb-infra';

import { StateEntity } from '../../../../../../common/types';
import { StateService } from './../../../../../../common/services/state.service';
import { TransitionService } from './../../../../../../common/services/transition.service';

@Component({
  selector: 'mcb-workflow-movement-list',
  templateUrl: './movement-list.component.html',
})

export class MovementListComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItems = [
    { textKey: 'states', path: ['../..'], relativeTo: this.activatedRoute },
    { text: '...' },
    { textKey: 'transitions' }
  ];

  gridData;
  skip = 0;
  processId: number;
  transitionId: number;
  stateId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private stateService: StateService,
    private transitionService: TransitionService,
    private ui: UIService) {
    this.loadGridData();
    const processId = +this.activatedRoute.snapshot.params.processId;
    this.transitionId = +this.activatedRoute.snapshot.params.transitionId;
    this.stateId = +this.activatedRoute.snapshot.params.stateId;
  }

  onDataStateChange(state: DataStateChangeEvent) {
    this.skip = state.skip;
    this.loadGridData();
  }

  onDelete(item: StateEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        this.stateService.deleteState(item.id).subscribe(x => {
          this.gridData = x;
        });
      });
  }

  private loadGridData() {
    this.transitionService.getMovementsForGrid(this.transitionId).subscribe(x => {
      this.gridData = x;
    });
  }
}
