import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestTakeChequeState2ConfirmationComponent } from './test-take-cheque-state2-confirmation.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState2ConfirmationComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})

export class TestTakeChequeState2ConfirmationRoutingModule {
}

