import { Component } from '@angular/core';
import { UIService, TranslatorService } from '@navaco/mcb-infra';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';

import { ProcessEntity } from './../../../common/types';
import { ProcessManagementService } from '../../../common/services/process.service';

@Component({
  selector: 'mcb-workflow-process-list',
  templateUrl: './process-list.component.html',
})
export class ProcessListComponent {
  gridData;
  skip = 0;
  selectedRow: ProcessEntity = {} as ProcessEntity;

  constructor(
    private service: ProcessManagementService,
    private tr: TranslatorService,
    private ui: UIService) {
    this._loadGridData();
  }

  _onDataStateChange(state: DataStateChangeEvent) {
    this.skip = state.skip;
    this._loadGridData();
  }

  changeSelectRow(item) {
    if (item.selectedRows[0]) {
      this.selectedRow = item.selectedRows[0].dataItem;
    }
  }


  toolbarOperationClick(row: ProcessEntity) {
    this.ui.showConfirm(
      this.tr.translate('changeStatus')
        .replace('{status}', row.active ? this.tr.translate('deactivation') : this.tr.translate('activation')),
      'changeStatusConfirmation', () => {
        // this.service[row ? 'deActive' : 'active'](row.id).subscribe(data => {
        this.service.editProcess(row).subscribe(data => {
          this.ui.showToast(this.tr.translate('successChangeStatus')
            .replace('{title}', row.name)
            .replace('{status}', row ? this.tr.translate('deActive') : this.tr.translate('active')),
            { timer: 10000 });
          this._loadGridData();
        });
      }, () => {
        this.selectedRow.active = !row.active;
      });
  }

  onDelete(item: ProcessEntity) {
    this.ui.showConfirm(
      'warning',
      'deleteWarningMsg',
      () => {
        this.service.deleteProcess(item.id).subscribe(x => {
          this._loadGridData();
        });
      });
  }

  _loadGridData() {
    this.service.processesFindPaging().subscribe(x => {
      this.gridData = x;
    });
  }
}
