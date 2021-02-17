import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb, BreadcrumbItem, UIService } from 'angular-infra';

import { ProcessEntity } from '../../../common/types';
import { ProcessManagementService } from '../../../common/services/process.service';

@Component({
  selector: 'mcb-workflow-process-edit',
  templateUrl: './process-edit.component.html'
})
export class ProcessEditComponent {
  editMode: boolean;
  processId: number;
  process: ProcessEntity = {} as ProcessEntity;
  activeValues = [{ value: true, text: 'بلی' }, { value: false, text: 'خیر' }];

  @Breadcrumb() get breadcrumb(): BreadcrumbItem {
    return this.editMode ? { textKey: 'edit' } : { textKey: 'add' };
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProcessManagementService,
    private ui: UIService,
    private router: Router) {
    this.processId = +this.activatedRoute.parent.snapshot.params.processId;
    this.editMode = isFinite(this.processId);
    this.process.active = true;
    if (this.editMode) {
      service.getProcess(this.processId).subscribe(x => this.process = x);
    }
  }

  onFormSubmit() {
    let obs: Observable<any>;
    if (this.editMode) {
      obs = this.service.editProcess(this.process);
    } else {
      obs = this.service.createProcess(this.process);
    }

    obs.subscribe(x => {
      this.ui.showToast('saved');
      this.editMode ?
        this.router.navigate(['../..'], { relativeTo: this.activatedRoute }) :
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }
}
