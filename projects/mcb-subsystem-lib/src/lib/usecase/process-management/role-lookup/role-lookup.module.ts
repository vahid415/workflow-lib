import { NgModule } from '@angular/core';
import { InfrastructureModule } from 'angular-infra';
import { RoleLookupComponent } from './role-lookup.component';
import { SubsystemModule } from '../../../subsystem/subsystem.module';


@NgModule({
  declarations: [RoleLookupComponent],
  exports: [RoleLookupComponent],
  imports: [    
    InfrastructureModule,
    SubsystemModule,
  ]
})
export class RoleLookupModule { }
