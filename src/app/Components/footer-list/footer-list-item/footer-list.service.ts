import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FooterListService {

  formAudio : FormGroup;
  controlAudio : FormControl = new FormControl(50);
  constructor() {
    this.formAudio = new FormGroup({
      controlAudio:this.controlAudio
    })
   }
}
