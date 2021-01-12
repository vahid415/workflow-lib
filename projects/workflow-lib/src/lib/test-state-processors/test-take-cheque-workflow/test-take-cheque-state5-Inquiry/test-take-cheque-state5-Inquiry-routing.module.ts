import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule } from '@navaco/mcb-infra';
import { TestTakeChequeState5InquiryComponent } from './test-take-cheque-state5-Inquiry.component';

const routes: McbRoutes = [
  {
    path: '',
    component: TestTakeChequeState5InquiryComponent
  },
];

@NgModule({
  imports: [McbRouterModule.forChild(routes)]
})

export class TestTakeChequeState5InquiryRoutingModule {
}

