import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from '@navaco/mcb-infra';
import { TestTakeChequeState7DocumentsComponent } from './test-take-cheque-state7-documents.component';
import { TestTakeChequeState7DocumentsRoutingModule } from './test-take-cheque-state7-documents-routing.module';

@NgModule({
  declarations: [TestTakeChequeState7DocumentsComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    TestTakeChequeState7DocumentsRoutingModule
  ]
})

export class TestTakeChequeState7DocumentsModule { }
