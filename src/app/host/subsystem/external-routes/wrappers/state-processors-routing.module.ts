import { NgModule } from '@angular/core';
import { NgRoutes, NgRouterModule } from 'angular-infra';

const routes: NgRoutes = [

  {
    path: 'state1',
    loadChildren: () => import('./state-processors/test-workflow-state1').then(x => x.TestWorkflowState1ModuleWrapperModule)
  },
  {
    path: 'state2',
    loadChildren: () => import('./state-processors/test-workflow-state2').then(x => x.TestWorkflowState2ModuleWrapperModule)
  },
  {
    path: 'state3',
    loadChildren: () => import('./state-processors/test-workflow-state3').then(x => x.TestWorkflowState3ModuleWrapperModule)
  },
  {
    path: 'state1',
    loadChildren: () => import('./state-processors/test-workflow-state1').then(x => x.TestWorkflowState1ModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state1-checking',
    loadChildren: () => import('./state-processors/test-take-cheque-state1-checking').then(x => x.TestTakeChequeState1CheckingModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state2-confirmation',
    loadChildren: () => import('./state-processors/test-take-cheque-state2-confirmation').then(x => x.TestTakeChequeState2ConfirmationModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state3-confirmed',
    loadChildren: () => import('./state-processors/test-take-cheque-state3-confirmed').then(x => x.TestTakeChequeState3ConfirmedModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state4-validation',
    loadChildren: () => import('./state-processors/test-take-cheque-state4-validation').then(x => x.TestTakeChequeState4ValidationModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state5-inquiry',
    loadChildren: () => import('./state-processors/test-take-cheque-state5-Inquiry').then(x => x.TestTakeChequeState5InquiryModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state6-review',
    loadChildren: () => import('./state-processors/test-take-cheque-state6-review').then(x => x.TestTakeChequeState6ReviewModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state7-documents',
    loadChildren: () => import('./state-processors/test-take-cheque-state7-documents').then(x => x.TestTakeChequeState7DocumentsModuleWrapperModule)
  },
  {
    path: 'test-take-cheque-state8-final',
    loadChildren: () => import('./state-processors/test-take-cheque-state8-final').then(x => x.TestTakeChequeState8FinalModuleWrapperModule)
  },
];


@NgModule({
  declarations: [],
  imports: [
    NgRouterModule.forChild(routes)]
})
export class StateProcessorsRoutingModule { }
