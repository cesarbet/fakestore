import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreFormComponent } from './store-form/store-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoreListComponent,
    StoreFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StoreListComponent,
    StoreFormComponent
  ]
})
export class StoreModule { }
