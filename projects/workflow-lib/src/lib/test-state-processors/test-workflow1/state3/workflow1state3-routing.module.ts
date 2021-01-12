import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestWorkflow1State3Component } from './workflow1state3.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestWorkflow1State3Component
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})
export class TestWorkflow1State3RoutingModule {
}

