import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { TestTakeChequeState6ReviewComponent } from './test-take-cheque-state6-review.component';

const routes: NgRoutes = [
  {
    path: '',
    component: TestTakeChequeState6ReviewComponent
  },
];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})

export class TestTakeChequeState6ReviewRoutingModule {
}

