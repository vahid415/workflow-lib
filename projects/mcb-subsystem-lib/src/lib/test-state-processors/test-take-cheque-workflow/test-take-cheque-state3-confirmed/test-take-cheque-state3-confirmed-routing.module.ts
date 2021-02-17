import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestTakeChequeState3ConfirmedComponent } from './test-take-cheque-state3-confirmed.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState3ConfirmedComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})

export class TestTakeChequeState3ConfirmedRoutingModule {
}

