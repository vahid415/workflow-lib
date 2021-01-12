import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseMasterPageController, MasterFormPermission, FilterOperation, McbGridColumnType } from '@navaco/mcb-infra';

import { RequestHistoryService } from '../../common/services/request-history.service';
import { ProcessManagementService } from '../../common/services/process.service';
import { DetailExpandEvent } from '@progress/kendo-angular-grid';
import { RequestState } from '../../common/enums';

@Component({
  selector: 'lib-request-history',
  templateUrl: './request-history.component.html',
})
export class RequestHistoryComponent extends BaseMasterPageController implements OnInit {
  permissions: MasterFormPermission = { search: '2004', edit: '2004', show: '2004' };
  @ViewChild('searchForm', { static: true }) search: NgForm;
  processList: string[] = [];
  roles: string[] = [];
  notes: string[] = [];
  lists: any[] = [];
  user = {};
  cachedRoles: Map<number, string> = new Map<number, string>();
  cachedNotes: Map<number, string> = new Map<number, string>();
  cachedUser: Map<number, string> = new Map<number, string>();
  searchFilter = [
    { fieldName: 'processName', operation: FilterOperation.EQUAL, value: null },
    { fieldName: 'referenceNumber', operation: FilterOperation.EQUAL, value: null },
  ];
  constructor(public service: RequestHistoryService, private processService: ProcessManagementService,
  ) {
    super(service);
    this.masterFormModel.addButtonVisible = false;
  }

  ngOnInit(): void {
    this.searchForm = this.search;
  }

  getProcessors(e) {
    if (!this.processList.length) {
      this.processService.processesFindPaging().subscribe(x => {
        this.processList = x;
      });
    }
  }
  initMasterFormLabels() {
    this.setMasterFormLabels('', '');
  }

  initDataGridColumns() {
    this.addMasterGridColumn({
      field: 'requestId',
      width: 200
    });
    this.addMasterGridColumn({
      field: 'requestStateInsertDate',
      title: 'createDate',
      type: McbGridColumnType.JALALIDATE
    });
    this.addMasterGridColumn({
      field: 'processName'
    });
    this.addMasterGridColumn({
      field: 'stateName'
    });
    this.addMasterGridColumn({
      field: 'userId',
      title: 'acceptedUser'
    });
    this.addMasterGridColumn({
      field: 'requestStateStatus',
      title: 'status',
      cellTemplate: (element, rowData) => {
        switch (rowData.requestStateStatus) {
          case RequestState.ACTIVE:
            return element.innerText = 'درحال پیگیری';
          case RequestState.COMPLETED:
            return element.innerText = 'کامل شده';
          case RequestState.DONE:
            return element.innerText = 'انجام شده';
          case RequestState.INIT:
            return element.innerText = 'در حالت اولیه';
          case RequestState.READY:
            return element.innerText = 'در حالت آماده';
          case RequestState.ROLE_BACK:
            return element.innerText = 'بازگشت داده شده';
        }
      }
    });
  }

  getNotes(id) {
    this.service.getNotes(id).subscribe(res => {
      this.notes = res;
    });
  }
  getRole(id) {
    this.service.getRole(id).subscribe(res => {
      this.notes = res;
    });
  }

  beforeDetailExpand(item: DetailExpandEvent) {
    this.fetchRoles(item);
    this.fetchNotes(item);
    this.fetchUser(item);
  }

  fetchRoles(item: DetailExpandEvent) {
    const roles = this.cachedRoles.get(item.index);
    item.dataItem.roles = [];
    roles ? item.dataItem.roles.push(roles) : null;
    if (!roles) {
      this.service.getRole(item.dataItem.requestStateId).subscribe(res => {
        res.forEach(x => {
          this.cachedRoles.set(item.index, x);
          item.dataItem.roles = res;
          return item;
        });
      });
    }
    return item;
  }

  fetchNotes(item: DetailExpandEvent) {
    const notes = this.cachedNotes.get(item.index);
    item.dataItem.notes = [];
    notes ? item.dataItem.notes.push(notes) : null;
    if (!notes) {
      this.service.getNotes(item.dataItem.requestStateId).subscribe(res => {
        res.forEach(x => {
          this.cachedNotes.set(item.index, x);
          item.dataItem.notes = res;
          return item;
        });
      });
    }
    return item;
  }

  fetchUser(item: DetailExpandEvent) {
    const user = this.cachedUser.get(item.index);
    item.dataItem.notes = [];
    user ? item.dataItem.user = user : null;
    if (!user && item.dataItem.userId) {
      this.service.getUser(item.dataItem.userId).subscribe(res => {
        this.cachedUser.set(item.index, res);
        item.dataItem.user = res;
        return item;
      });
    }
    return item;
  }
}

