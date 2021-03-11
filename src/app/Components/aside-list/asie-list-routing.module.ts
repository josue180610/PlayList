import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideListItemComponent } from './aside-list-item/aside-list-item.component';

const routes : Routes = [
    { 
        path:"aside",
        component:AsideListItemComponent
    }
]

@NgModule({
    
    imports: [
      RouterModule.forChild([])
    ],
    exports : [ 
        RouterModule
    ]
  })
  export class AsideListRoutingModule { }