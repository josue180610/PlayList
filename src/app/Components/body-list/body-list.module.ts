import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyListItemComponent } from './body-list-item/body-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterListModule } from '../footer-list/footer-list.module';



@NgModule({
  declarations: [BodyListItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FooterListModule
  ],
  exports: [ BodyListItemComponent]
})
export class BodyListModule { }
