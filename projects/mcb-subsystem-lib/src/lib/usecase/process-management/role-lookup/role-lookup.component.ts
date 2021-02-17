import { TranslatorService } from 'angular-infra';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SelectableSettings, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'mcb-role-search-grid',
  templateUrl: './role-lookup.component.html',
})
export class RoleLookupComponent {
  searchModel: { id: number, title: string } = { id: null, title: null };
  @Input() selectionMode = 'single';
  @Output() onSelectRow: EventEmitter<any> = new EventEmitter<any>()
  selectableSettings: SelectableSettings;
  mySelection: string[] = [];
  selectedCallback = (args) => args.dataItem;
  gridConfig = {
    sort: [],
    size: 5,
    start: 0,
    pageConf: { buttonCount: 5, type: 'numeric', info: true, pageSizes: true, previousNext: true },
    grid: {
      data: [],
      total: 0
    }
  };

  defaultDataForEnum = { key: null, value: this.translate.translate('dropDownDefaultText') };

  constructor(
    private translate: TranslatorService,
    public activatedRoute: ActivatedRoute,
    public router: Router) {

    //this.loadItems(this.gridConfig.start, this.gridConfig.size, this.gridConfig.sort);
  }

  loadItems(start, size, sort): void {
    /* const filters = [];
    if (this.searchModel.id) {
      filters.push({ fieldName: 'id', operation: 'eq', value: this.searchModel.id });
    }

    if (this.searchModel.title) {
      filters.push({ fieldName: 'title', operation: 'like', value: this.searchModel.title });
    }

    this.service.roleFiltering(
      this.gridConfig.start,
      this.gridConfig.size,
      filters,
      null
    ).subscribe(res => {
      this.gridConfig.grid = { data: res.data, total: res.size };
      if (!res.data.length) {
        this.toast.info({
          message: this.translate.translate('resultNotFound'),
          timer: 2000,
        });
      }
    }); */
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
    if (event.selectedRows.length) {
      this.onSelectRow.emit(this.mySelection);
    }
  }
}
