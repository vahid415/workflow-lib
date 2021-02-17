import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbItem, Breadcrumb } from 'angular-infra';

@Component({
  selector: 'mcb-workflow-process-management-root',
  template: `<router-outlet mcbRouterOutlet></router-outlet>`,
})
export class ProcessManagementRootComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'processes', path: ['./'], relativeTo: this.activatedRoute };

  constructor(private activatedRoute: ActivatedRoute) {}
}
