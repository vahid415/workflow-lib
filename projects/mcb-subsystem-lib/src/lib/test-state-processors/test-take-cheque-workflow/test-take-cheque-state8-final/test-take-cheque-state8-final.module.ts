import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from 'angular-infra';
import { TestTakeChequeState8FinalComponent } from './test-take-cheque-state8-final.component';
import { TestTakeChequeState8FinalRoutingModule } from './test-take-cheque-state8-final-routing.module';

@NgModule({
  declarations: [TestTakeChequeState8FinalComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    TestTakeChequeState8FinalRoutingModule
  ]
})

export class TestTakeChequeState8FinalModule { }
