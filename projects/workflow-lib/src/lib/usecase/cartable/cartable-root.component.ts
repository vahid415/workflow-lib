import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbItem, Breadcrumb } from '@navaco/mcb-infra';

@Component({
  selector: 'mcb-workflow-cartable-root',
  templateUrl: './cartable-root.component.html',
})
export class CartableRootComponent {
  @Breadcrumb() breadcrumb: BreadcrumbItem = { textKey: 'cartable', path: ['./'], relativeTo: this.activatedRoute };

  constructor(private activatedRoute: ActivatedRoute) {
  }
}
