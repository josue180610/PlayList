import { Component, OnInit, ViewChild } from '@angular/core';
import { AsideListItemComponent } from '../aside-list/aside-list-item/aside-list-item.component';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {

  flagShow=false;
  constructor() { }
  changeFlagShow(){ 
    this.flagShow=!this.flagShow;
  }
  ngOnInit(): void {
  }

}
