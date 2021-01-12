import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { UIService, Breadcrumb, BreadcrumbItems } from '@navaco/mcb-infra';

import { TransitionEntity } from '../../../../../common/types';
import { StateService } from './../../../../../common/services/state.service';
import { TransitionService } from './../../../../../common/services/transition.service';


@Component({
  selector: 'mcb-workflow-transition-list',
  templateUrl: './transition-list.component.html',
})
export class TransitionListComponent {
  @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;
  @Breadcrumb() breadcrumb: BreadcrumbItems = [
    { textKey: 'states', path: [ '../..' ], relativeTo: this.activatedRoute },
    { text: '...' },
    { textKey: 'transitions' },
    { textKey: 'add', show: false },
    { textKey: 'edit', show: false }
  ];

  gridData;
  stateId: number;
  transition: TransitionEntity = {} as TransitionEntity;
  constructor(
    private stateService: StateService,
    private transitionService: TransitionService,
    private ui: UIService,
    private activatedRoute: ActivatedRoute) {
    this.stateId = +this.activatedRoute.snapshot.params.stateId;
    stateService.getState(this.stateId).subscribe(x => {
      this.breadcrumb[ 1 ].text = x.name;
    });
    this.loadGridData();
  }

  onDataStateChange(state: DataStateChangeEvent) {
    this.loadGridData();
  }

  onDelete(item: TransitionEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        this.transitionService.deleteTransition(item.id).subscribe(x => {
          this.gridData = x;
        });
      });
  }

  private loadGridData() {
    this.transitionService.getTransitions(this.stateId).subscribe(x => {
      this.gridData = x;
    });
  }
}
