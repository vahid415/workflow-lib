import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestWorkflow1State2Component } from './workflow1state2.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestWorkflow1State2Component
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})
export class TestWorkflow1State2RoutingModule {
}

