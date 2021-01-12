import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState4ValidationComponent } from './test-take-cheque-state4-validation.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState4ValidationComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})

export class TestTakeChequeState4ValidationRoutingModule {
}

