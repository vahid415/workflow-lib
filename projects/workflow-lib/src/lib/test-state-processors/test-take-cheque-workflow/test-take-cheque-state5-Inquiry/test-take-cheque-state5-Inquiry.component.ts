import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Breadcrumb, BreadcrumbItem, UIService } from '@navaco/mcb-infra';

import { WorkflowService } from '../../../common/services/workflow-service';
import { RequestActionService } from '../../../common/services/request-action.service';
import { RequestCommitDto, RequestActionEntity, TransitionEntity } from '../../../common/types';

@Component({
  selector: 'lib-test-take-cheque-state5-Inquiry',
  templateUrl: './test-take-cheque-state5-Inquiry.component.html'
})

export class TestTakeChequeState5InquiryComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'State5-Inquiry' };
  @ViewChild('form') form: NgForm;

  model = {
    DestinationAccount: '',
    InquiryDescription: ''
  };
  requestActions: RequestActionEntity[];
  requestCommitDto: RequestCommitDto = {} as RequestCommitDto;
  transition: TransitionEntity;

  constructor(
    private ui: UIService,
    private workflowService: WorkflowService,
    private service: RequestActionService,
  ) {
    this.requestActions = workflowService.cartableItem.requestActions;
  }

  onSubmit() {
    this.transition ? this.requestCommitDto.expressionData = this.transition : null;
    this.requestCommitDto.requestAction = {} as any;
    this.requestCommitDto.requestAction.id = this.requestActions[ 0 ].id;
    this.requestCommitDto.requestDataValue = this.model;
    this.service.commit(this.requestCommitDto).subscribe(x => {
      this.ui.showToast('saved');
      this.workflowService.goToCartablePage();
      this.form.resetForm();
    });
  }
}