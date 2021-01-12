import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule, InfrastructureModule } from '@navaco/mcb-infra';

import { RequestHistoryComponent } from './request-history.component';


const routes: McbRoutes = [
  {
    path: '',
    component: RequestHistoryComponent,

  },
];



@NgModule({
  declarations: [ RequestHistoryComponent ],
  imports: [
    InfrastructureModule,
    McbRouterModule.forChild(routes)
  ]
})
export class RequestHistoryModule { }
