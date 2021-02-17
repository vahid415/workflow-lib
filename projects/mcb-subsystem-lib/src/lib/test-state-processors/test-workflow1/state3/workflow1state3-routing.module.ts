import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestWorkflow1State3Component } from './workflow1state3.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestWorkflow1State3Component
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})
export class TestWorkflow1State3RoutingModule {
}

