import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestTakeChequeState4ValidationComponent } from './test-take-cheque-state4-validation.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState4ValidationComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})

export class TestTakeChequeState4ValidationRoutingModule {
}

