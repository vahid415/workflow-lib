import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { InfrastructureModule } from 'angular-infra';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    InfrastructureModule,
    RouterModule.forChild([{
      path: '',
      component: TestComponent,
      children: [{
        path: 'add',
        loadChildren: () => import('./add/add.module').then(m => m.AddModule)
      }]
    }])
  ]
})
export class TestModule { }
