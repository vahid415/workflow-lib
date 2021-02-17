import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestTakeChequeState7DocumentsComponent } from './test-take-cheque-state7-documents.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState7DocumentsComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})

export class TestTakeChequeState7DocumentsRoutingModule {
}

