import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState3ConfirmedComponent } from './test-take-cheque-state3-confirmed.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState3ConfirmedComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})

export class TestTakeChequeState3ConfirmedRoutingModule {
}

