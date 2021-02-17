import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestTakeChequeState1CheckingComponent } from './test-take-cheque-state1-checking.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState1CheckingComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})
export class TestTakeChequeState1CheckingRoutingModule {
}

