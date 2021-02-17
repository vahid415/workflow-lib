import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestTakeChequeState5InquiryComponent } from './test-take-cheque-state5-Inquiry.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState5InquiryComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})

export class TestTakeChequeState5InquiryRoutingModule {
}

