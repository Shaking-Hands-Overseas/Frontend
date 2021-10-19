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
  status: Fingers[] = [] // Empty list which will serve as the body when sending the Configuration of the fingers to the API
  customstatus: Custom[] = [] // Empty list which will serve as the body when sending the configuration of the angles to the API

  constructor(private handservice: HandService) { } // Importing Hand Service into the constructor

  ngOnInit(): void {
  }

  model = new Fingers("s1", "s2", "s3", "s4", "s5") //The Default Configuration of fingers
  nonemodel = new Fingers("", "", "", "", "") // The Empty dictionary where the actual choice of the user will be stored

  custom = new Custom(0, 0, 0, 0, 0) // The Default Configuration of the angles
  nonecustom = new Custom(0, 0, 0, 0, 0) // The Empty dictionary where the actual choice of the user will be stored
  onSubmit() {}

 OnClick() { // When clicked the submit button the code written for the API communication in the Hands Service is exectued
  this.handservice.SendInfo(this.model) // With the body message containing the Configuration of fingers
    .subscribe(info => this.status.push(info)); 
    
  this.handservice.Custom(this.custom) // With the body message containing the Configuration of angles
    .subscribe(info => this.customstatus.push(info));
 }
}
