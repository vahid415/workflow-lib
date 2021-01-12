import { NgModule } from '@angular/core';
import { InfrastructureModule } from '@navaco/mcb-infra';
import { ProcessManagementRoutingModule } from './process-management-routing.module';
import { StateListComponent } from './states/state-list/state-list.component';
import { StateEditComponent } from './states/state-edit/state-edit.component';
import { TransitionListComponent } from './states/transitions/transition-list/transition-list.component';
import { TransitionEditComponent } from './states/transitions/transition-edit/transition-edit.component';
import { ProcessEditComponent } from './process-edit/process-edit.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { ActionListComponent } from './states/actions/action-list/action-list.component';
import { ActionEditComponent } from './states/actions/action-edit/action-edit.component';
import { ProcessManagementRootComponent } from './process-management-root.component';
import { ProcessRootComponent } from './process-root.component';
import { MovementEditComponent } from './states/transitions/movements/movement-edit/movement-edit.component';
import { MovementListComponent } from './states/transitions/movements/movement-list/movement-list.component';

@NgModule({
  declarations: [
    ProcessManagementRootComponent,

    ProcessRootComponent,
    ProcessListComponent,
    ProcessEditComponent,

    StateListComponent,
    StateEditComponent,

    ActionListComponent,
    ActionEditComponent,

    TransitionListComponent,
    TransitionEditComponent,

    MovementEditComponent,
    MovementListComponent    
  ],
  imports: [
    InfrastructureModule,
    ProcessManagementRoutingModule,
  ]
})
export class ProcessManagementModule {
}

