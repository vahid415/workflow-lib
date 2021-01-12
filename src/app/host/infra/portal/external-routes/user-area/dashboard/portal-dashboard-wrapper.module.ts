import { NgModule } from '@angular/core';
import { DashboardModule } from '@navaco/mcb-infra';

@NgModule({
  imports: [DashboardModule],
  exports: [DashboardModule]
})
export class PortalDashboardWrapperModule { }
