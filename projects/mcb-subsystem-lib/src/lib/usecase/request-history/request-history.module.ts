import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule, InfrastructureModule } from 'angular-infra';

import { RequestHistoryComponent } from './request-history.component';


const routes: NgRoutes = [
  {
    path: '',
    component: RequestHistoryComponent,
    children: [{
      path: 'test',
      loadChildren: () => import('./test/test.module').then(m => m.TestModule)
    }]
  },
];



@NgModule({
  declarations: [RequestHistoryComponent],
  imports: [
    InfrastructureModule,
    NgRouterModule.forChild(routes)
  ]
})
export class RequestHistoryModule { }
