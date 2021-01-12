import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestWorkflowState1Component } from './test-workflow1-state1.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestWorkflowState1Component
  }
];
@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})
export class TestWorkflowState1RoutingModule {
}

