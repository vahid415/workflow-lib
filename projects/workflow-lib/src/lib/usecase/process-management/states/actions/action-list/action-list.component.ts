import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { UIService, Breadcrumb, BreadcrumbItems } from '@navaco/mcb-infra';

import { StateEntity, ActionEntity } from '../../../../../common/types';
import { ActionService } from './../../../../../common/services/action.service';
import { StateService } from './../../../../../common/services/state.service';

@Component({
  selector: 'mcb-workflow-action-list',
  templateUrl: './action-list.component.html'
})
export class ActionListComponent {
  gridData;
  stateId: number;
  state: StateEntity = {} as StateEntity;
  action: ActionEntity = {} as ActionEntity;

  @Breadcrumb() breadcrumb: BreadcrumbItems =
    [
      { textKey: 'states', path: ['../..'], relativeTo: this.activatedRoute },
      { text: '...' },
      { textKey: 'actions' },
      { textKey: 'add', show: false },
      { textKey: 'edit', show: false }
    ];

  constructor(
    private stateService: StateService,
    private actionService: ActionService,
    private ui: UIService,
    private activatedRoute: ActivatedRoute) {
    this.loadGridData();
    this.stateId = +this.activatedRoute.snapshot.params.stateId;
    stateService.getState(this.stateId).subscribe(x => {
      this.breadcrumb[1].text = x.name;
    });
  }

  onDataStateChange(state: DataStateChangeEvent) {
    this.loadGridData();
  }

  onDelete(item: ActionEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        this.actionService.deleteAction(item.id).subscribe(x => {
          this.gridData = x;
        });
      });
  }

  private loadGridData() {
    this.actionService.getActions().subscribe(x => {
      this.gridData = x;
    });
  }
}
