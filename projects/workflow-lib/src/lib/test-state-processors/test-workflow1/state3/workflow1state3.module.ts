import { NgModule } from '@angular/core';
import { InfrastructureModule } from '@navaco/mcb-infra';
import { TestWorkflow1State3RoutingModule } from './workflow1state3-routing.module';
import { TestWorkflow1State3Component } from './workflow1state3.component';

@NgModule({
  declarations: [
    TestWorkflow1State3Component
  ],
  imports: [
    InfrastructureModule,
    TestWorkflow1State3RoutingModule
  ]
})
export class TestWorkflow1State3Module { }
