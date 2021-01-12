import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';
import { UIService, Breadcrumb, BreadcrumbItems } from '@navaco/mcb-infra';

import { StateEntity } from '../../../../common/types';
import { StateService } from './../../../../common/services/state.service';

@Component({
  selector: 'mcb-workflow-state-list',
  templateUrl: './state-list.component.html',
})

export class StateListComponent {
  @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;

  @Breadcrumb() breadcrumb: BreadcrumbItems = [
    { textKey: 'states' }
  ];

  gridData;
  skip = 0;
  state: StateEntity = {} as StateEntity;
  processId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private stateService: StateService,
    private ui: UIService) {
    this.processId = +this.activatedRoute.parent.snapshot.params.processId;
    this.loadGridData();
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
          this.loadGridData();
        });
      });
  }

  private loadGridData() {
    this.stateService.getStatesForGrid(this.processId).subscribe(x => {
      this.gridData = x;
    });
  }
}
