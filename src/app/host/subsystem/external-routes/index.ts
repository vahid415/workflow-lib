import { SubsystemExternalRouteConfig } from 'angular-infra';
import { SubsystemRootComponent, SubsystemContextComponent } from '@navaco/mcb-workflow';

export default {
  usecasesRoutes: [
    {
      path: 'workflow',
      component: SubsystemContextComponent,
      children: [{
        path: '',
        component: SubsystemRootComponent,
        children: [
          {
            path: 'processes',
            loadChildren: () => import('./wrappers/process-management-wrapper.module').then(x => x.ProcessManagementWrapperModule)
          },
          {
            path: 'cartable',
            loadChildren: () => import('./wrappers/cartable-wrapper.module').then(x => x.CartableWrapperModule)
          },
          {
            path: 'history',
            loadChildren: () => import('./wrappers/request-history-wrapper.module').then(x => x.RequestHistoryWrapperModule)
          },
          {
            path: 'request-start-test',
            loadChildren: () => import('./wrappers/state-processors/request-start-test-wrapper.module').then(x => x.RequestStartTestWrapperModule)
          },
          {
            path: 'processors',
            loadChildren: () => import('./wrappers/state-processors-routing.module').then(x => x.StateProcessorsRoutingModule)
          },
        ]
      }]
    }
  ],
  stateProcessorsRoutes: [
    {
      id: 'TestApprovementState1',
      titleKey: 'state1',
      path: 'workflow/processors/state1',
      loadChildren: () => import('./wrappers/state-processors/test-workflow-state1').then(x => x.TestWorkflowState1ModuleWrapperModule)
    },
    {
      id: 'TestWorkflow1State1',
      titleKey: 'TestWorkflow1State1',
      path: 'workflow/processors/state1',
      loadChildren: () => import('./wrappers/state-processors/test-workflow-state1').then(x => x.TestWorkflowState1ModuleWrapperModule)
    },
    {
      id: 'TestWorkflow1State2',
      titleKey: 'TestWorkflow1State2',
      path: 'workflow/processors/state2',
      loadChildren: () => import('./wrappers/state-processors/test-workflow-state2').then(x => x.TestWorkflowState2ModuleWrapperModule)
    },
    {
      id: 'TestWorkflow1State3',
      titleKey: 'TestWorkflow1State3',
      path: 'workflow/processors/state3',
      loadChildren: () => import('./wrappers/state-processors/test-workflow-state3').then(x => x.TestWorkflowState3ModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState1Checking',
      titleKey: 'TestTakeChequeState1Checking',
      path: 'workflow/processors/test-take-cheque-state1-checking',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state1-checking').then(x => x.TestTakeChequeState1CheckingModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState2Confirmation',
      titleKey: 'TestTakeChequeState2Confirmation',
      path: 'workflow/processors/test-take-cheque-state2-confirmation',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state2-confirmation').then(x => x.TestTakeChequeState2ConfirmationModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState3Confirmed',
      titleKey: 'TestTakeChequeState3Confirmed',
      path: 'workflow/processors/test-take-cheque-state3-confirmed',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state3-confirmed').then(x => x.TestTakeChequeState3ConfirmedModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState4Validation',
      titleKey: 'TestTakeChequeState4Validation',
      path: 'workflow/processors/test-take-cheque-state4-validation',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state4-validation').then(x => x.TestTakeChequeState4ValidationModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState5Inquiry',
      titleKey: 'TestTakeChequeState5Inquiry',
      path: 'workflow/processors/test-take-cheque-state5-inquiry',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state5-Inquiry').then(x => x.TestTakeChequeState5InquiryModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState6Review',
      titleKey: 'TestTakeChequeState6Review',
      path: 'workflow/processors/test-take-cheque-state6-review',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state6-review').then(x => x.TestTakeChequeState6ReviewModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState7Documents',
      titleKey: 'TestTakeChequeState7Documents',
      path: 'workflow/processors/test-take-cheque-state7-documents',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state7-documents').then(x => x.TestTakeChequeState7DocumentsModuleWrapperModule)
    },
    {
      id: 'TestTakeChequeState8Final',
      titleKey: 'TestTakeChequeState8Final',
      path: 'workflow/processors/test-take-cheque-state8-final',
      loadChildren: () => import('./wrappers/state-processors/test-take-cheque-state8-final').then(x => x.TestTakeChequeState8FinalModuleWrapperModule)
    },
  ]
} as SubsystemExternalRouteConfig;

