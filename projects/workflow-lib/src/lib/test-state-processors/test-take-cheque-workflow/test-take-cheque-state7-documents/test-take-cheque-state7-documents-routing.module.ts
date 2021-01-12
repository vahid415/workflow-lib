import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState7DocumentsComponent } from './test-take-cheque-state7-documents.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState7DocumentsComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})

export class TestTakeChequeState7DocumentsRoutingModule {
}

