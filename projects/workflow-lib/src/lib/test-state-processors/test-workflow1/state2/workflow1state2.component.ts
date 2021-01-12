import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { UIService, BreadcrumbItem, Breadcrumb } from '@navaco/mcb-infra';

import { WorkflowService } from '../../../common/services/workflow-service';
import { RequestActionService } from '../../../common/services/request-action.service';
import { RequestCommitDto, RequestActionEntity, TransitionEntity } from '../../../common/types';

@Component({
  selector: 'mcb-workflow-workflow1state1',
  templateUrl: './workflow1state2.component.html',
})
export class TestWorkflow1State2Component implements OnInit {
  model = {
    field1: '',
    field2: '',
    field3: '',
  };
  requestActions: RequestActionEntity[];
  requestCommitDto: RequestCommitDto = {} as RequestCommitDto;
  transition: TransitionEntity;
  expression: any;
  @ViewChild('form') form: NgForm;

  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'workflow1state2' };

  constructor(
    private service: RequestActionService,
    public router: Router,
    private workflowService: WorkflowService,
    private ui: UIService) {
    this.requestActions = workflowService.cartableItem.requestActions;
    this.transition = workflowService.transition;
    this.expression = workflowService.expression;
  }

  ngOnInit() {
    if (!this.requestActions) {
      this.router.navigate([ 'user/sys/workflow/cartable' ]);
    }
  }

  onSubmit() {
    this.requestCommitDto.expressionData = this.expression;

    // this.transition ? this.requestCommitDto.expressionData = this.transition : null;
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
