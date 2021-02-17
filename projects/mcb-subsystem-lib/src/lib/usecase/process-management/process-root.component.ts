import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbItem, Breadcrumb } from 'angular-infra';

import { ProcessManagementService } from '../../common/services/process.service';

@Component({
  selector: 'mcb-workflow-process-root',
  template: `<router-outlet mcbRouterOutlet></router-outlet>`,
})
export class ProcessRootComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { text: '' };

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProcessManagementService,
  ) {
    const processId = +this.activatedRoute.snapshot.params.processId;
    service.getProcess(processId).subscribe(x => {
      this.breadcrumb.text = x.name;
    });
  }
}
