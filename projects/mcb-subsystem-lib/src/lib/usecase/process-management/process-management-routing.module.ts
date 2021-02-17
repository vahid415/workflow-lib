import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessEditComponent } from './process-edit/process-edit.component';
import { StateEditComponent } from './states/state-edit/state-edit.component';
import { StateListComponent } from './states/state-list/state-list.component';
import { TransitionListComponent } from './states/transitions/transition-list/transition-list.component';
import { TransitionEditComponent } from './states/transitions/transition-edit/transition-edit.component';
import { ActionEditComponent } from './states/actions/action-edit/action-edit.component';
import { ActionListComponent } from './states/actions/action-list/action-list.component';
import { ProcessManagementRootComponent } from './process-management-root.component';
import { ProcessRootComponent } from './process-root.component';
import { MovementEditComponent } from './states/transitions/movements/movement-edit/movement-edit.component';
import { MovementListComponent } from './states/transitions/movements/movement-list/movement-list.component';

const routes: NgRoutes = [{
  path: '',
  component: ProcessManagementRootComponent,
  children: [
    {
      path: '',
      component: ProcessListComponent
    },
    {
      path: 'add',
      component: ProcessEditComponent
    },
    {
      path: ':processId',
      component: ProcessRootComponent,
      children: [
        {
          path: 'edit',
          component: ProcessEditComponent
        },
        {
          path: 'states',
          component: StateListComponent
        },
        {
          path: 'states/add',
          component: StateEditComponent
        },
        {
          path: 'states/:stateId/edit',
          component: StateEditComponent
        },
        {
          path: 'states/:stateId/actions',
          component: ActionListComponent
        },
        {
          path: 'states/:stateId/actions/add',
          component: ActionEditComponent
        },
        {
          path: 'states/:stateId/actions/:actionId/edit',
          component: ActionEditComponent
        },
        {
          path: 'states/:stateId/transitions',
          component: TransitionListComponent
        },
        {
          path: 'states/:stateId/transitions/:transitionId/movements',
          component: MovementListComponent
        },
        {
          path: 'states/:stateId/transitions/add',
          component: TransitionEditComponent
        },
        {
          path: 'states/:stateId/transitions/:transitionId/edit',
          component: TransitionEditComponent
        },
        {
          path: 'states/:stateId/transitions/:transitionId/movements/add',
          component: MovementEditComponent
        },
        {
          path: 'states/:stateId/transitions/add/movements/add',
          component: MovementEditComponent
        },
        {
          path: 'states/:stateId/transitions/:transitionId/movements/:movementId/edit',
          component: MovementEditComponent
        },
      ]
    },
  ]
}];

@NgModule({
  imports: [NgRouterModule.forChild(routes)]
})
export class ProcessManagementRoutingModule {
}

