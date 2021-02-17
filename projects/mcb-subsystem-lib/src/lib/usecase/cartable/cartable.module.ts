import { NgModule } from '@angular/core';
import { InfrastructureModule } from 'angular-infra';

import { CartableService } from './cartable.service';
import { CartableComponent } from './cartable.component';
import { CartableRootComponent } from './cartable-root.component';
import { CartableRoutingModule } from './cartable-routing.module';

@NgModule({
  declarations: [
    CartableRootComponent,
    CartableComponent
  ],
  imports: [
    InfrastructureModule,
    CartableRoutingModule
  ]
})
export class CartableModule {
  constructor(cartableService: CartableService,) {
    cartableService.registerAllStateProcessorRoutes();
  }
}
