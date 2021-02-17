import { NgRouterModule, NgRoutes, InfrastructureModule } from 'angular-infra';
import { NgModule } from '@angular/core';

import { RequestStartTestComponent } from './request-start-test.component';
const routes: NgRoutes = [
  {
    path: '',
    component: RequestStartTestComponent
  },
];

@NgModule({
  declarations: [RequestStartTestComponent],
  imports: [NgRouterModule.forChild(routes),
    InfrastructureModule],
})
export class RequestStartTestModule { }
