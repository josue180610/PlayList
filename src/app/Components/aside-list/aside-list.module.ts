import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideListItemComponent } from './aside-list-item/aside-list-item.component';



@NgModule({
  declarations: [AsideListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [AsideListItemComponent]
})
export class AsideListModule { }
