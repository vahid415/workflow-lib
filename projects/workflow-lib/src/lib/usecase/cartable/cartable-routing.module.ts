import { NgModule } from '@angular/core';
import { McbRoutes, McbRouterModule, SUBSYSTEM_USECASES_ROUTES } from '@navaco/mcb-infra';
import { CartableComponent } from './cartable.component';
import { CartableRootComponent } from './cartable-root.component';
import { SUBSYSTEM_STATE_PROCESSORS_ROUTES } from '../../common/types';
import { CartableService } from './cartable.service';

const routes: McbRoutes = [
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
  imports: [McbRouterModule.forChild(routes)]
})
export class CartableRoutingModule {
}

