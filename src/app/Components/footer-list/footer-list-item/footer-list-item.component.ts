import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ResponseSearch } from '../../Model/ResponseSearchAlbum';
import { PlayListService } from '../../Services/play-list.service';
import { FooterListService } from './footer-list.service';

@Component({
  selector: 'app-footer-list-item',
  templateUrl: './footer-list-item.component.html',
  styleUrls: ['./footer-list-item.component.scss']
})
export class FooterListItemComponent implements OnInit {
  counter:any=0;
  responseSearchCollections : Array<ResponseSearch> = [];
  @Input()
  linkMusic:any="";
  @Input()
  artistTitle:any="";
  @Input()
  albumTitle:any="";
  @Input()
  linkImage:any="";
  flagAudio = false;
  flagPlay=false;
  audio = new Audio();
  constructor(private ref:ChangeDetectorRef,
    private serFooter:PlayListService,
    public react:FooterListService) { }

  handleAudioEnabled() { 
    this.flagAudio=!this.flagAudio;
    if(this.flagAudio===true){
      this.ismute();
    }
    if(this.flagAudio===false){ 
      this.isnotmute();
    }
    this.ref.detectChanges();
  }
  showMessage(linkImage,linkmusic:any,art:any,album:any,reprod:any, collectionMusic:any){
    this.artistTitle=art;
    this.albumTitle=album;
    this.linkImage=linkImage;
    this.linkMusic=linkmusic;
    this.audio.pause();
    this.flagPlay=false;
    if(reprod){
      this.play(this.linkMusic);
    }
    this.responseSearchCollections=collectionMusic;
    this.ref.detectChanges();
  }
  ngOnInit(): void {
    this.react.controlAudio.setValue(100);
  }
  play(url) {
    this.audio = new Audio(url);
    this.audio.play();
    this.flagPlay=!this.flagPlay;
    this.ref.detectChanges();
  }
  pause(url){
    this.audio.pause();
    this.flagPlay=!this.flagPlay;
    this.ref.detectChanges();
  }
  ismute(){
    this.audio.muted=true;
  }
  isnotmute(){
    this.audio.muted=false;
  }
  asigValueArray(index){
    this.artistTitle=this.responseSearchCollections[index].artist.name;
    this.albumTitle=this.responseSearchCollections[index].album.title;
    this.linkImage=this.responseSearchCollections[index].album.cover_small;
    this.linkMusic=this.responseSearchCollections[index].preview;
    this.ref.detectChanges();
  }
  next(){
    this.counter=this.counter+1;
    if(this.counter===this.responseSearchCollections.length-1){
      this.counter=0;
    }
    this.asigValueArray(this.counter);
    this.pause("");
  }
  controlVolume(event: MatSliderChange){ 
    this.audio.volume=event.value;
  }
  back(){
    this.counter=this.counter-1;
    if(this.counter<=0){
      this.counter=this.responseSearchCollections.length-1;
    }
    this.asigValueArray(this.counter);
    this.pause("");
  }
}
