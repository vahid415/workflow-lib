import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from 'angular-infra';
import { TestTakeChequeState6ReviewRoutingModule } from './test-take-cheque-state6-review-routing.module';
import { TestTakeChequeState6ReviewComponent } from './test-take-cheque-state6-review.component';

@NgModule({
  declarations: [TestTakeChequeState6ReviewComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    TestTakeChequeState6ReviewRoutingModule
  ]
})

export class TestTakeChequeState6ReviewModule { }
