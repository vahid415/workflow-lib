import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestWorkflow1State2Component } from './workflow1state2.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestWorkflow1State2Component
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})
export class TestWorkflow1State2RoutingModule {
}

