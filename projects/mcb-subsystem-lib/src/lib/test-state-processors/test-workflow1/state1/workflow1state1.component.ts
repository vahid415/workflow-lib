import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { UIService, Breadcrumb, BreadcrumbItem } from 'angular-infra';

import { WorkflowService } from '../../../common/services/workflow-service';
import { RequestActionService } from '../../../common/services/request-action.service';
import {RequestCommitDto, RequestActionEntity, TransitionEntity } from '../../../common/types';

@Component({
  selector: 'mcb-workflow-test-workflow-state1',
  templateUrl: './workflow1state1.component.html',
})

export class TestWorkflowState1Component {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'workflow1state1' };
  @ViewChild('form') form: NgForm;
  model = {
    amount: '',
    duration: '',
    accept: true
  };

  requestActions: RequestActionEntity[];
  transition: TransitionEntity;
  expression: unknown;
  requestCommitDto: RequestCommitDto = {} as RequestCommitDto;
  constructor (
    private ui: UIService,
    private workflowService: WorkflowService,
    private service: RequestActionService,
  ) {
    this.requestActions = workflowService.cartableItem.requestActions;
    this.transition = workflowService.transition;
    this.expression = workflowService.expression;
  }
  test(x: RequestCommitDto) {

  }
  onSubmit() {
    // this.requestCommitDto.expressionData = this.expression;
    // this.transition ? this.requestCommitDto.expressionData = this.transition : null;
    //    const expressionValue = this.expression.split('#')[1].trim();
    //  let expressionKey = this.expression.split('=')[0].trim().replace(/["']/g, "");
    // expressionKey = this.expression.split('!')[0].trim().replace(/["']/g, "");
    this.requestCommitDto.expressionData = { amount: this.model.amount, duration: this.model.duration, accept: this.model.accept.toString() };
    this.requestCommitDto.requestAction = {} as any;
    this.requestCommitDto.requestDataValue = this.model;
    this.requestCommitDto.requestAction.id = this.requestActions[ 0 ].id;
    this.service.commit(this.requestCommitDto).subscribe(x => {
      this.ui.showToast('saved');
      this.workflowService.goToCartablePage();
      this.form.resetForm();
    });
  }
}
