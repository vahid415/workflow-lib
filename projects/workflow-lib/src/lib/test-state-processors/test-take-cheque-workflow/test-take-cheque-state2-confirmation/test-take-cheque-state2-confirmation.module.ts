import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTakeChequeState2ConfirmationComponent } from './test-take-cheque-state2-confirmation.component';
import { TestTakeChequeState2ConfirmationRoutingModule } from './test-take-cheque-state2-confirmation-routing.module';
import { InfrastructureModule } from '@navaco/mcb-infra';

@NgModule({
  declarations: [TestTakeChequeState2ConfirmationComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    TestTakeChequeState2ConfirmationRoutingModule
  ]
})

export class TestTakeChequeState2ConfirmationModule { }
