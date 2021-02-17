import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule, SUBSYSTEM_USECASES_ROUTES } from 'angular-infra';
import { CartableComponent } from './cartable.component';
import { CartableRootComponent } from './cartable-root.component';
import { SUBSYSTEM_STATE_PROCESSORS_ROUTES } from '../../common/types';
import { CartableService } from './cartable.service';

const routes: NgRoutes = [
  {
    path: '',
    component: CartableRootComponent,
    children: [
      {
        path: '',
        component: CartableComponent
      },
      {
        path: CartableService.PROCESSORS_SUB_PATH,
        children: SUBSYSTEM_STATE_PROCESSORS_ROUTES
      },      
    ]
  },
];
@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})
export class CartableRoutingModule {
}

