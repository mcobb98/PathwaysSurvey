import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getRandomString } from '../../node_modules/@types/selenium-webdriver/safari';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this._formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
    this.ninthFormGroup = this._formBuilder.group({
      ninthCtrl: ['', Validators.required]
    });
    this.tenthFormGroup = this._formBuilder.group({
      tenthCtrl: ['', Validators.required]
    });
  
  }

  submitToAPI() {
    var surveydata = {
      "SubmitID":Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), 
      "Question 1" : this.firstFormGroup.value["firstCtrl"], 
      "Question 2" : this.secondFormGroup.value["secondCtrl"], 
      "Question 3" : this.thirdFormGroup.value["thirdCtrl"],
      "Question 4" : this.fourthFormGroup.value["fourthCtrl"],
      "Question 5" : this.fifthFormGroup.value["fifthCtrl"],
      "Question 6" : this.sixthFormGroup.value["sixthCtrl"],
      "Question 7" : this.seventhFormGroup.value["seventhCtrl"],
      "Question 8" : this.eighthFormGroup.value["eighthCtrl"],
      "Question 9" : this.ninthFormGroup.value["ninthCtrl"],
      "Question 10" : this.tenthFormGroup.value["tenthCtrl"]
    }

    var data = JSON.stringify(surveydata);
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://hd1myifw5b.execute-api.us-east-1.amazonaws.com/default/surveydata");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "*/*");

    xhr.send(data);
  }

}


