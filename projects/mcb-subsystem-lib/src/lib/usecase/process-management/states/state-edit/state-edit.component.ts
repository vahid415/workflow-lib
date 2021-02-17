import { Target } from './../../../../common/enums';
import { StateRoleEntity } from './../../../../common/types';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SelectableSettings, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Breadcrumb, BreadcrumbItems, SubsystemExternalRouteConfig, UIService, TranslatorService } from 'angular-infra';

import { CartableService } from '../../../cartable/cartable.service';
import { StateService } from '../../../../common/services/state.service';
import { ActivityService } from '../../../../common/services/activity.service';
import { ProcessManagementService } from '../../../../common/services/process.service';
import { ActionEntity, ActivityEntity, ActivityTargetEntity, RoleActivityEntity, RoleEntity, StateEntity } from '../../../../common/types';


@Component({
  selector: 'mcb-workflow-state-edit',
  templateUrl: './state-edit.component.html'
})

export class StateEditComponent {
  @Breadcrumb() get breadcrumb(): BreadcrumbItems {
    return this.editMode ?
      [
        { textKey: 'states', path: ['../..'], relativeTo: this.activatedRoute },
        { text: this.state.name },
        { textKey: 'edit' }
      ] :
      [
        { textKey: 'states', path: ['../'], relativeTo: this.activatedRoute },
        { textKey: 'add' }
      ];
  }

  editMode: boolean;
  stateId: number;
  processId: number;
  state: StateEntity = {} as StateEntity;
  stateTypes = [{ text: 'حالت نخستین', value: 'INITIAL' }, { text: 'حالت میانی', value: 'MEDIAL' }, { text: 'حالت پایانی', value: 'TERMINAL' }];
  systemicValues = [{ value: true, text: 'بلی' }, { value: false, text: 'خیر' }];
  FilteredStateProcessors = [];
  stateProcessorsData = [];
  action: ActionEntity = {} as ActionEntity;
  activity: ActivityEntity = {} as ActivityEntity;
  activityTypes = [{ text: 'NOTIFY', value: 'NOTIFY' }];
  activityTargets = [
    { id: 1, name: 'STAKEHOLDER', nameFarsi: 'مرتبطین' },
    { id: 2, name: 'PROCESS_ADMIN', nameFarsi: 'مسیول' },
    { id: 3, name: 'REQUESTER', nameFarsi: 'درخواست دهنده(کاربر)' },
    { id: 4, name: 'ROLE', nameFarsi: 'گروه کاربری' },
  ];
  roleActivity: RoleActivityEntity = {} as RoleActivityEntity;
  roleActivityId: number;
  activityTarget: Target;
  actionTypes = [
    { text: 'بازکردن فرم', value: 'COMPONENT_RUN' },
    { text: 'فراخوانی سرویس', value: 'SERVICE_CALL' },
  ];
  types = [{ text: 'پس فعالیت', value: 'POST' }, { text: 'پیش فعالیت', value: 'PRE' }, { text: 'بازگشت', value: 'ROLLBACK' }];
  componentType: boolean;
  showAddActionForm = false;
  showAddActivityForm = false;
  showAddRoleForm = false;
  isOnlySameOrg = true;

  @ViewChild('addActionForm') addActionForm: NgForm;
  @ViewChild('addActivityForm') addActivityForm: NgForm;
  @ViewChild('addRoleForm') addRoleForm: NgForm;

  searchModel: { id: number, title: string } = { id: null, title: null };
  @Input() selectionMode = 'single';
  @Output() onSelectRow: EventEmitter<any> = new EventEmitter<any>()
  selectableSettings: SelectableSettings;
  mySelection: string[] = [];
  subsystems: [] = [];
  selectedCallback = (args) => args.dataItem;

  gridConfig = {
    sort: [],
    size: 5,
    start: 0,
    pageConf: { buttonCount: 5, type: 'numeric', info: true, pageSizes: true, previousNext: true },
    grid: { data: [], total: 0 }
  };


  constructor(
    private ui: UIService,
    private tr: TranslatorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartableService: CartableService,
    private activityService: ActivityService,
    private processService: ProcessManagementService,
    private stateService: StateService) {

    this.stateId = +this.activatedRoute.snapshot.params.stateId;
    this.processId = +this.activatedRoute.parent.snapshot.params.processId;
    this.editMode = isFinite(this.stateId);
    this.state.actions = [] as any;
    this.state.activities = [] as any;
    this.state.roles = [] as any;
    this.state.isOnlySameOrg = true;
    this.state.isSelectDestinationOrg = false;

    if (this.editMode) {
      stateService.getState(this.stateId).subscribe(x => {
        this.state = x;
        if (x.actions) {
          this.state.actions = x.actions;
        } else {
          this.state.actions = [] as any;
        }

        if (x.activities) {
          this.state.activities = x.activities;
        } else {
          this.state.activities = [] as any;
        }

        if (x.roles) {
          this.state.roles = x.roles;
          this.roleActivityId = x.roles[0].id;
        } else {
          this.state.roles = [] as any;
          // this.roleActivityId = 0;
        }
      });
    }

    cartableService.getAllSubsystemsWithStateProcessors()
      .forEach(sys => {
        (sys.externalRoutes as SubsystemExternalRouteConfig).stateProcessorsRoutes.forEach(sp => {
          sp.titleKey = this.tr.translate(sp.titleKey, sys);
          this.stateProcessorsData.push(sp);
          this.FilteredStateProcessors = this.stateProcessorsData;
        });
      });
    // cartableService.getAllSubsystem().subscribe(res => this.subsystems = res);

    this.loadItems(this.gridConfig.start, this.gridConfig.size, this.gridConfig.sort);
  }

  handleFilter(value) {
    this.FilteredStateProcessors = this.stateProcessorsData.filter((s) => s.titleKey.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  onAddActionForm() {
    this.showAddActionForm = true;
  }

  onAddActivityForm() {
    this.showAddActivityForm = true;
  }

  onAddRolesForm() {
    this.showAddRoleForm = true;
  }

  onShowStateForm() {
    this.showAddActionForm = false;
    this.showAddActivityForm = false;
    this.showAddRoleForm = false;
  }

  onDataStateChange(state: DataStateChangeEvent) { }

  onDeleteAction(item: ActionEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        var index = this.state.actions.findIndex(x => x === item);
        this.state.actions.splice(index, 1);
      });
  }

  onDeleteActivity(item: ActivityEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        var index = this.state.activities.findIndex(x => x === item);
        this.state.activities.splice(index, 1);
      });
  }

  onDeleteRole(item: RoleActivityEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        var index = this.state.roles.findIndex(x => x === item);
        this.state.roles.splice(index, 1);
      });
  }

  onAddActionsSubmit() {
    if (this.action.actionType === 'COMPONENT_RUN'){
      this.action.uri = this.stateProcessorsData.find(x => x.titleKey === this.action.uri).id;
    }
    this.state.actions.push(this.action);
    this.action = { nextState: {} } as any;
    this.addActionForm.resetForm();
    this.onShowStateForm();
  }

  onAddActivitiesSubmit() {
    let item: ActivityTargetEntity = {} as any;
    this.activity.activityTargets = [] as any;
    item.target = this.activityTarget;
    this.activity.activityTargets.push(item);
    this.state.activities.push(this.activity);
    this.activity = {} as any;
    this.addActivityForm.resetForm();
    this.onShowStateForm();
  }
  checkRole() {
    if (!this.state.roles.length) {
      return false
    }
  }
  onFormSubmit() {
    this.state.process = {} as any;
    this.state.process.id = this.processId;
    let obs: Observable<any>;
    if (this.validateForm()) {
      if (this.editMode) {
        obs = this.stateService.editState(this.state);
      } else {
        obs = this.stateService.createState(this.state);
      }
      obs.subscribe(x => {
        this.ui.showToast('successAddState');
        this.editMode ?
          this.router.navigate(['../..'], { relativeTo: this.activatedRoute }) :
          this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      });
    }

  }

  validateForm() {
    try {
      if (!this.state.roles.length) {
        this.ui.showToast('noRoleSelectedForThisState', { style: 'error' });
        return false
      }
      if (this.state.roles.length && this.state.stateType === 'INITIAL') {
        if (!this.state.systemic && !this.state.actions.some(x => x.actionType === 'COMPONENT_RUN')) {
          this.ui.showToast('noActionTypeSelectedAsTypeComponent', { style: 'error' });
          return false
        }
      }
    }
    catch { }
    return true;
  }

  // ************* Role Grid *****************

  loadItems(start, size, sort): void {
    const filters = [];
    if (this.searchModel.id) {
      filters.push({ fieldName: 'id', operation: 'eq', value: this.searchModel.id });
    }

    if (this.searchModel.title) {
      filters.push({ fieldName: 'title', operation: 'like', value: this.searchModel.title });
    }

    this.processService.roleFiltering(
      this.gridConfig.start,
      this.gridConfig.size,
      filters,
      null
    ).subscribe(res => {
      this.gridConfig.grid.data = res.data;
      /*  { data: res, total: res.size }; */
      /*     if (!res.length) {
            this.toast.info({
              message: this.translate.translate('resultNotFound'),
              timer: 2000,
            });
          } */
    });
  }

  refresh() {
    if (this.gridConfig) { this.gridConfig.grid.data = []; }
    this.searchModel = { id: null, title: null };
  }

  handlePageChange(event: PageChangeEvent) {
    this.gridConfig.start = event.skip;
    this.gridConfig.size = event.take;
    if (this.gridConfig.grid.data.length > 0) {
      this.loadItems(this.gridConfig.start, this.gridConfig.size, this.gridConfig.sort);
    }
  }

  handleSortChange(sort) {
    this.gridConfig.sort = sort;
    if (this.gridConfig.grid.data.length) {
      this.loadItems(this.gridConfig.start, this.gridConfig.size, sort);
    }
  }

  handleSelectionChange(event) {
    if (event.selectedRows.length) { }
  }

  onAddRoleGrid(item: RoleEntity) {
    this.roleActivity.role = item
    this.roleActivity.id = this.roleActivityId;

    for (let i = 0; i < this.state.roles.length; i++) {
      if (this.state.roles[i].role.id === item.id) {
        this.ui.showToast('roleHasBeenAdded');
        this.roleActivity = { role: {} as any } as any;
        const x = this.gridConfig.grid.data.indexOf(item);
        this.gridConfig.grid.data.splice(x, 1);
        return;
      }
    }
    this.state.roles.push(this.roleActivity);
    this.ui.showToast('thisRoleAddedToTheStatesRolesList');
    this.roleActivity = { role: {} as any } as any;
    const x = this.gridConfig.grid.data.indexOf(item);
    this.gridConfig.grid.data.splice(x, 1);
  }
}

