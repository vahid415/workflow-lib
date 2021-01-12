import { NgModule } from '@angular/core';
import { PortalLayoutComponent, McbRoutes, McbRouterModule } from '@navaco/mcb-infra';

const routes: McbRoutes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login-area/portal-login-area-layout-wrapper.module').then(x => x.PortalLoginAreaWrapperModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user-area/portal-user-area-layout-wrapper.module').then(x => x.PortalUserAreaLayoutWrapperModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    McbRouterModule.init(),
    McbRouterModule.forChild(routes),
  ]
})
export class PortalRoutingModule { }
