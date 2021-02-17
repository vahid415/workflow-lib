import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from 'angular-infra';
import { TestTakeChequeState4ValidationRoutingModule } from './test-take-cheque-state4-validation-routing.module';
import { TestTakeChequeState4ValidationComponent } from './test-take-cheque-state4-validation.component';

@NgModule({
  declarations: [TestTakeChequeState4ValidationComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    TestTakeChequeState4ValidationRoutingModule
  ]
})

export class TestTakeChequeState4ValidationModule { }
