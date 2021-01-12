import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState2ConfirmationComponent } from './test-take-cheque-state2-confirmation.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState2ConfirmationComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})

export class TestTakeChequeState2ConfirmationRoutingModule {
}

