import { NgModule } from '@angular/core';
import { PortalLayoutComponent, NgRoutes, NgRouterModule } from 'angular-infra';

const routes: NgRoutes = [
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
    NgRouterModule.init(),
    NgRouterModule.forChild(routes),
  ]
})
export class PortalRoutingModule { }
