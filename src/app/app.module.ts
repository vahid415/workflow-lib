import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfrastructureModule, Environment } from 'angular-infra';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { PortalHostModule } from './host/infra/portal/portal-host.module';
import { SubsystemHostModule } from './host/subsystem/subsystem-host.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfrastructureModule,
    PortalHostModule,
    SubsystemHostModule
  ],
  providers: [
    { provide: Environment, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
