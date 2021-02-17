import { NgModule } from '@angular/core';
import { DashboardModule } from 'angular-infra';

@NgModule({
  imports: [DashboardModule],
  exports: [DashboardModule]
})
export class PortalDashboardWrapperModule { }
