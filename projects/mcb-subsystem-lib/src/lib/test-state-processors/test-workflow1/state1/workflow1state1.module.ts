import { NgModule } from '@angular/core';
import { InfrastructureModule } from 'angular-infra';
import { TestWorkflowState1RoutingModule } from './workflow1state1routing.module';
import { TestWorkflowState1Component } from './workflow1state1.component';

@NgModule({
  declarations: [
    TestWorkflowState1Component
  ],
  imports: [
    TestWorkflowState1RoutingModule,
    InfrastructureModule,
  ]
})
export class TestWorkflow1State1Module {
}
