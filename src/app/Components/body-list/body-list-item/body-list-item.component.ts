import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FooterListItemComponent } from '../../footer-list/footer-list-item/footer-list-item.component';
import { ResponseSearch } from '../../Model/ResponseSearchAlbum';
import { PlayListService } from '../../Services/play-list.service';
import { BodyListReactiveService } from './body-list-reactive.service';

@Component({
  selector: 'app-body-list-item',
  templateUrl: './body-list-item.component.html',
  styleUrls: ['./body-list-item.component.scss']
})
export class BodyListItemComponent implements OnInit, AfterViewInit {

  @ViewChild(FooterListItemComponent) footerComponent : FooterListItemComponent;
  @BlockUI() blockUI: NgBlockUI;
  nameArt:string="";
  subDescription="";
  fans ="";
  minDescription="";
  imgArt="";
  imgBackGround="";
  nameAlbum="";
  rank="";
  responseSearchCollections : Array<ResponseSearch> = [];
  flagFound:boolean = false;
  flagMessageFound:boolean = false;
  
  constructor(private serv:PlayListService,
    public react:BodyListReactiveService,
    private ref:ChangeDetectorRef) { }
  ngAfterViewInit(): void {
      console.log(this.footerComponent)
  }

  ngOnInit(): void {
    
  this.handleSearchInputValue("?");
  }
  showMessagePadre(linkImage,linkMusic,artTitle,albumTitle,reprod){ 
      this.footerComponent.showMessage(linkImage,linkMusic,artTitle,albumTitle,reprod,this.responseSearchCollections);
    }
  searchDataByParameter($event){
    $event.preventDefault();
    this.handleSearchInputValue(this.react.search.value);
  }
  handleSearchInputValue(parameter){ 
    this.blockUI.start("Cargando...");
    this.serv.getPlayList(parameter).toPromise().then(
      (res) => {
        this.flagFound = true;
        this.flagMessageFound=false;
        this.responseSearchCollections=res["data"];
        if(this.responseSearchCollections.length>0){ 
          this.nameArt=this.responseSearchCollections[1].artist.name;
          this.imgBackGround=this.responseSearchCollections[1].artist.picture;
          this.imgArt=this.responseSearchCollections[1].album.cover_big;
          this.subDescription=this.responseSearchCollections[1].title;
          this.rank=this.responseSearchCollections[1].rank;
          this.nameAlbum=this.responseSearchCollections[1].album.title;
          this.showMessagePadre(this.responseSearchCollections[1].album.cover_small,this.responseSearchCollections[1].preview,this.nameArt,this.nameAlbum,false)
        }
        this.ref.detectChanges();
        this.blockUI.stop();
      },
      (error:HttpErrorResponse) => { 
        this.flagFound =true;
        this.flagMessageFound=true;
      }
    )
  }
}
