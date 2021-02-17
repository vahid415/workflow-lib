import { NgModule } from '@angular/core';
import { NgRouterModule, NgRoutes } from 'angular-infra';
import { TestTakeChequeState8FinalComponent } from './test-take-cheque-state8-final.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState8FinalComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})

export class TestTakeChequeState8FinalRoutingModule {
}

