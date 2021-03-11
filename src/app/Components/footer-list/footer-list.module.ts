import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterListItemComponent } from './footer-list-item/footer-list-item.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterListItemComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[FooterListItemComponent]
})
export class FooterListModule { }
