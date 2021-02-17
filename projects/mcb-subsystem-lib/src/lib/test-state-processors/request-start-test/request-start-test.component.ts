import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Breadcrumb, BreadcrumbItem, UIService } from 'angular-infra';

import { RequestStartDto } from '../../common/types';
import { RequestActionService } from './../../common/services/request-action.service';
import { ProcessManagementService } from './../../common/services/process.service';

@Component({
  selector: 'lib-request-start-test',
  templateUrl: './request-start-test.component.html',
})
export class RequestStartTestComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'استارت فرایند' };
  @ViewChild('form') form: NgForm;
  requestStartDto: RequestStartDto = new RequestStartDto();
  processList: string[];

  constructor(
    private ui: UIService,
    private processService: ProcessManagementService,
    private service: RequestActionService) {
    this.processService.processesFindPaging().subscribe(x => {
      this.processList = x;
    })
  }

  onSubmit() {
    this.service.start(this.requestStartDto).subscribe(x => {
      this.ui.showToast('successStartProcess');
      this.form.resetForm();
    });
  }
}
