import { NgModule } from '@angular/core';
import { SubsystemManager } from 'angular-infra';
import { SubsystemModule, SUBSYSTEM } from '@navaco/mcb-workflow';
import externalRoutes from './external-routes';

@NgModule({
  exports: [SubsystemModule]
})
export class SubsystemHostModule {
  constructor(subsystemManager: SubsystemManager) {
    // UNCOMMENT FOLLOWING LINE IF YOU ARE CREATING A BUSINESS SUBSYSTEM
    subsystemManager.register(SUBSYSTEM, externalRoutes);
  }
}
