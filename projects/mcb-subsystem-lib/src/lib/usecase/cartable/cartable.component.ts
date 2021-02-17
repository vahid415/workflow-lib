import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UIService, UserIdentity, AuthenticationService } from 'angular-infra';
import { Component, ViewChild, Optional } from '@angular/core';
import { DataStateChangeEvent, RowClassArgs } from '@progress/kendo-angular-grid';

import { CartableService } from './cartable.service';
import { ActionType, TransitionType } from '../../common/enums';
import { WorkflowService } from '../../common/services/workflow-service';
import { RequestStateEntity, TransitionEntity, RequestNoteEntity, RequestEntity } from '../../common/types';

@Component({
  selector: 'mcb-workflow-cartable',
  templateUrl: './cartable.component.html',
  styles: [ `.action-column button {
    margin: 0px 2px;
  }
  
  .cartable-item-notes {
    overflow-y: scroll;
    height: 150px;
    font-size: smaller;
  }
  `]
})
export class CartableComponent {
  gridData;
  skip = 0;
  size = 10;
  dataParam = {
    size: this.size,
    start: 0,
    filters: [],
    sort: null
  };

  map: Map<string, string>;
  notesDialogOpened = false;
  user: UserIdentity;
  activeItem: RequestStateEntity;
  requestNote: RequestNoteEntity = {} as RequestNoteEntity;
  activeItemNotes: RequestNoteEntity[];
  transitions: TransitionEntity[];
  @ViewChild('newNoteForm') newNoteForm: NgForm;

  constructor(
    private ui: UIService,
    private router: Router,
    private cartableService: CartableService,
    private workflowService: WorkflowService,
    @Optional() private authProvider: AuthenticationService) {
    this.loadGridData();
    this.map = cartableService.getAllSubsystemsStateProcessorsRoutesMap();
    this.user = this.authProvider.getUser() as UserIdentity;
  }

  _onDataStateChange(state: DataStateChangeEvent) {
    this.skip = state.skip;
    this.loadGridData();
  }

  onDoActionClick(item: RequestStateEntity) {
    this.doActionOnItem(item);
  }

  onLockItemClick(item: RequestStateEntity) {
    if (!item.userId) {
      this.cartableService.lockCartableItem(item.id).subscribe(res => {
        this.loadGridData();
      });
    }
  }

  onViewItemNotesClick(item: RequestStateEntity) {
    this.activeItem = item;
    this.notesDialogOpened = true;
    const pagingRequest = { filters: [], start: 0, size: 10, sort: null };
    pagingRequest.filters.push({ fieldName: 'request.id', value: item.request.id, operation: 'eq' });
    pagingRequest.filters.push({ fieldName: 'requestState.id', value: item.id, operation: 'eq' });
    this.cartableService.getCartableItemNotes(pagingRequest).subscribe(res => {
      this.activeItemNotes = res.data;
    });
  }

  onNewNoteFormSubmit() {
    this.requestNote.request = {} as RequestEntity;
    this.requestNote.requestState = {} as RequestStateEntity;
    this.requestNote.requestState.id = this.activeItem.id;
    this.requestNote.request.id = this.activeItem.request.id;
    this.cartableService.addNoteToCartableItem(this.requestNote).subscribe(res => {
      this.onViewItemNotesClick(this.activeItem);
      this.requestNote.id = res;
      this.ui.showToast('saved');
      this.newNoteForm.resetForm();
    });
  }

  doActionOnItem(item: RequestStateEntity) {
    const route = this.map.get(item.state.actions.find(x => x.actionType === ActionType.COMPONENT_RUN).uri);
    if (route) {
      this.workflowService.cartableItem = item;
      this.transitions = item.state.transitions;
      if (this.transitions && this.transitions.length && this.transitions[ 0 ].type === TransitionType.CONDITIONAL) {
        const expression = this.transitions.find(x => x.type === TransitionType.CONDITIONAL).movements[ 0 ].expression;
        // const expressionValue = expression.split('#')[ 1 ].trim();
        // let expressionKey = expression.split('=')[ 0 ].trim().replace(/["']/g, "");
        // expressionKey = expression.split('!')[ 0 ].trim().replace(/["']/g, "");
        // const transitions = { [ expressionKey ]: expressionValue };
        // this.workflowService.transition = transitions;
        this.workflowService.expression = expression;
      }
      this.router.navigate([ `${'user/sys/'}${route}` ]);
    } else {
      this.ui.showToast('noStateProcessorFoundForTask', { style: 'error' });
    }
  }

  loadGridData() {
    this.cartableService.getOpenItems(this.dataParam).subscribe(x => {
      this.gridData = x.data;
    });
  }

  gridRowClassFunc(row: RowClassArgs) {
    return row.dataItem.userId ? 'bg-warning' : '';
  }
}
