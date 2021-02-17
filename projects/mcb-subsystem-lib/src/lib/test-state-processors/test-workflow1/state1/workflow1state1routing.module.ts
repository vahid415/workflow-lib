import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestWorkflowState1Component } from './workflow1state1.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestWorkflowState1Component
  }
];
@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})
export class TestWorkflowState1RoutingModule {
}

