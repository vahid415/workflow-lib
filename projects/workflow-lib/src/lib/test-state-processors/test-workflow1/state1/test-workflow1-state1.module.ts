import { NgModule } from '@angular/core';
import { InfrastructureModule } from '@navaco/mcb-infra';
import { TestWorkflowState1RoutingModule } from './test-workflow1-state1-routing.module';
import { TestWorkflowState1Component } from './test-workflow1-state1.component';

@NgModule({
  declarations: [
    TestWorkflowState1Component
  ],
  imports: [
    InfrastructureModule,
    TestWorkflowState1RoutingModule
  ]
})
export class TestWorkflow1State1Module {
}
