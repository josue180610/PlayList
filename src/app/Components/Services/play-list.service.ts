import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseSearch } from '../Model/ResponseSearchAlbum';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {
  isOpen = "";
 
  @Output() change: EventEmitter = new EventEmitter();
  constructor(private http : HttpClient) { }

  handleError(error:HttpErrorResponse){
    return throwError(error);
  }
  toggle() {
    console.log("G")
    this.change.emit(this.isOpen);
  }
  public getPlayList(parameter:string) :Observable<any> {
    return this.http.get<ResponseSearch[]>(`https://api.deezer.com/search?q="${parameter}"`).pipe
    (
      catchError(this.handleError)
    );
  }

}
