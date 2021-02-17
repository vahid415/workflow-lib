import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from 'angular-infra';
import { TestTakeChequeState3ConfirmedComponent } from './test-take-cheque-state3-confirmed.component';
import { TestTakeChequeState3ConfirmedRoutingModule } from './test-take-cheque-state3-confirmed-routing.module';

@NgModule({
  declarations: [TestTakeChequeState3ConfirmedComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    TestTakeChequeState3ConfirmedRoutingModule
  ]
})

export class TestTakeChequeState3ConfirmedModule { }
