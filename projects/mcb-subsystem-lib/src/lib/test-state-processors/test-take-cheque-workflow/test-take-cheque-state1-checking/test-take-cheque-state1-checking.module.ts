import { NgModule } from '@angular/core';
import { InfrastructureModule } from 'angular-infra';

import { TestTakeChequeState1CheckingComponent } from './test-take-cheque-state1-checking.component';
import { TestTakeChequeState1CheckingRoutingModule } from './test-take-cheque-state1-checking-routing.module';

@NgModule({
  declarations: [TestTakeChequeState1CheckingComponent],
  imports: [
    InfrastructureModule,
    TestTakeChequeState1CheckingRoutingModule
  ]
})
export class TestTakeChequeState1CheckingModule { }
