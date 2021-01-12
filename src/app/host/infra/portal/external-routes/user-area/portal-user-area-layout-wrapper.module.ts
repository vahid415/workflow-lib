import { NgModule } from '@angular/core';
import { PortalUserAreaRoutingModule } from './portal-user-area-routing.module';
import { PortalUserAreaLayoutModule } from '@navaco/mcb-infra';

@NgModule({
  imports: [PortalUserAreaRoutingModule],
  exports: [PortalUserAreaLayoutModule]
})
export class PortalUserAreaLayoutWrapperModule { }
