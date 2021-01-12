import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState6ReviewComponent } from './test-take-cheque-state6-review.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState6ReviewComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})

export class TestTakeChequeState6ReviewRoutingModule {
}

