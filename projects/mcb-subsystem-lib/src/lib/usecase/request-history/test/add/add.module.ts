import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';



@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AddComponent
    }])
  ]
})
export class AddModule { }
