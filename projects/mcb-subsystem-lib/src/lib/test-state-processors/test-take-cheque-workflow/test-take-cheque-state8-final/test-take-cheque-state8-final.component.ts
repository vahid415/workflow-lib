import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Breadcrumb, BreadcrumbItem, UIService } from 'angular-infra';

import { WorkflowService } from '../../../common/services/workflow-service';
import { DtoBase, RequestCommitDto, RequestActionEntity } from '../../../common/types';
import { RequestActionService } from '../../../common/services/request-action.service';

@Component({
  selector: 'lib-test-take-cheque-state8-final',
  templateUrl: './test-take-cheque-state8-final.component.html'
})

export class TestTakeChequeState8FinalComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'State8 Final' };
  @ViewChild('form') form: NgForm;
  model = {
    description: '',
    done: false
  }

  requestActions: RequestActionEntity[];
  requestCommitDto: RequestCommitDto = {} as RequestCommitDto;
  transition: any;

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
    this.requestCommitDto.requestAction.id = this.requestActions[0].id;
    this.requestCommitDto.requestDataValue = this.model;
    this.service.commit(this.requestCommitDto).subscribe(x => {
      this.ui.showToast('saved');
      this.workflowService.goToCartablePage();
      this.form.resetForm();
    });
  }
}