import { NgModule } from '@angular/core';
import { InfrastructureModule } from '@navaco/mcb-infra';
import { TestTakeChequeState5InquiryComponent } from './test-take-cheque-state5-Inquiry.component';
import { TestTakeChequeState5InquiryRoutingModule } from './test-take-cheque-state5-Inquiry-routing.module';

@NgModule({
  declarations: [TestTakeChequeState5InquiryComponent],
  imports: [
    TestTakeChequeState5InquiryRoutingModule,
    InfrastructureModule
  ]
})

export class TestTakeChequeState5InquiryModule { }
