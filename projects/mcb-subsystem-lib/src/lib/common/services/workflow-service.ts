import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { RequestStateEntity, TransitionEntity } from '../types';


@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  cartableItem: RequestStateEntity = {} as RequestStateEntity;
  transition: TransitionEntity;
  expression: any;

  constructor(private router: Router) {
  }

  goToCartablePage() {
    this.router.navigateByUrl('user/sys/workflow/cartable');
  }
}
