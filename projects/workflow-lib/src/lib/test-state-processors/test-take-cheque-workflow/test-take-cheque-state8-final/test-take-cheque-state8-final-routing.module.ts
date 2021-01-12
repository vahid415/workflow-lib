import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState8FinalComponent } from './test-take-cheque-state8-final.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState8FinalComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})

export class TestTakeChequeState8FinalRoutingModule {
}

