import { NgModule } from '@angular/core';
import { PortalRoutingModule } from './external-routes/portal-routing.module';
import { environment } from 'src/environments/environment';
import { PortalModule, FakeAuthenticationProviderModule, DefaultAuthenticationProviderModule } from '@navaco/mcb-infra';

@NgModule({
  imports: [
    PortalRoutingModule,
    environment.useFakeAuthenticationProvider ? FakeAuthenticationProviderModule : DefaultAuthenticationProviderModule
  ],
  exports: [PortalModule]
})
export class PortalHostModule { }
