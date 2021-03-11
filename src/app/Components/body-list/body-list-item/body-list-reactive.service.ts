import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BodyListReactiveService {

  bodyListform : FormGroup;
  search :FormControl = new FormControl("");
  constructor() { 

    this.bodyListform = new FormGroup({ 
      search:this.search
    })

  }
}
