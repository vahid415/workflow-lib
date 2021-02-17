import { NgModule } from '@angular/core';
import { InfrastructureModule } from 'angular-infra';
import { TestWorkflow1State2RoutingModule } from './workflow1state2-routing.module';
import { TestWorkflow1State2Component } from './workflow1state2.component';

@NgModule({
  declarations: [
    TestWorkflow1State2Component
  ],
  imports: [
    InfrastructureModule,
    TestWorkflow1State2RoutingModule
  ]
})
export class TestWorkflow1State2Module {
}

