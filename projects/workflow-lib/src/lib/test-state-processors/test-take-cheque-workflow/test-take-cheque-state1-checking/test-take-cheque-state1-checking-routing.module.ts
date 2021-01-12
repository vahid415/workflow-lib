import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState1CheckingComponent } from './test-take-cheque-state1-checking.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState1CheckingComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})
export class TestTakeChequeState1CheckingRoutingModule {
}

