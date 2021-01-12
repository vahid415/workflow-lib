import { McbRouterModule, McbRoutes, InfrastructureModule } from '@navaco/mcb-infra';
import { NgModule } from '@angular/core';

import { RequestStartTestComponent } from './request-start-test.component';
const routes: McbRoutes = [
  {
    path: '',
    component: RequestStartTestComponent
  },
];

@NgModule({
  declarations: [RequestStartTestComponent],
  imports: [McbRouterModule.forChild(routes),
    InfrastructureModule],
})
export class RequestStartTestModule { }
