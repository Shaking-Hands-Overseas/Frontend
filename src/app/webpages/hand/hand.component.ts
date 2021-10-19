import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule, FormControl }   from '@angular/forms';

import { Fingers } from '../../_models/fingers'
import { HandService } from './hand.service'
import { Custom } from '../../_models/custom'

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  providers: [ HandService ],
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  status: Fingers[] = []
  customstatus: Custom[] = []

  constructor(private handservice: HandService) { }

  ngOnInit(): void {
  }

  model = new Fingers("s1", "s2", "s3", "s4", "s5") //The Default Configuration of fingers
  nonemodel = new Fingers("", "", "", "", "") // The Empty dictionary where the actual choice of the user will be stored

  custom = new Custom(0, 0, 0, 0, 0) // The Default Configuration of the angles
  nonecustom = new Custom(0, 0, 0, 0, 0) // The Empty dictionary where the actual choice of the user will be stored
  onSubmit() {}

 OnClick() {
  this.handservice.SendInfo(this.model)
    .subscribe(info => this.status.push(info));
    
  this.handservice.Custom(this.custom)
    .subscribe(info => this.customstatus.push(info));
 }
}
