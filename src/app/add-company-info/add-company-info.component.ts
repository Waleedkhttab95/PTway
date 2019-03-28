import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AddCompanyInfoService } from './add-company-info.service';
import { from } from 'rxjs';
import { mimeType } from '../add-user-info/mime-type.validator';



@Component({
  selector: 'app-add-company-info',
  templateUrl: './add-company-info.component.html',
  styleUrls: ['./add-company-info.component.css']
})
export class AddCompanyInfoComponent implements OnInit {
  comapnyResumeForm: FormGroup;
  imagePreview: string;
  selectTheme = 'primary';
  selectedValue: string;
  currentcountry: string[];
  countries = [];
  currentcity: string[];
  cities = [];

  postcompanyinfo() {
    if (this.comapnyResumeForm.invalid) {
      return;
    }
    this.rest.postcompanyinfo(this.comapnyResumeForm.value);
  }

  getcountry() {
    this.countries = [];
    this.rest.getcountry().subscribe((data: {}) => {
  
      for (let key in data) {
        this.countries.push({ value: data[key]._id, viewValue: data[key].countryName });


      }
    
    });
  }

  getcity() {
    this.cities = [];
    this.rest.getcity().subscribe((data: {}) => {
      
      for (let key in data) {
        this.cities.push({ value: data[key]._id, viewValue: data[key].cityName });
      }
     
    });
  }

  constructor(public rest: AddCompanyInfoService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.getcity();
    this.getcountry();
    this.comapnyResumeForm = this.fb.group({
      country: new FormControl(null ,
         {validators: [Validators.required]}),
      address: new FormControl(null ,
         {validators: [Validators.required]}),
      info: new FormControl(null ,
         {validators: [Validators.required]}),
      image: new FormControl(null , {asyncValidators: [mimeType]}),
      vision: new FormControl(null ,
         {validators: [Validators.required]}),
      message: new FormControl(null ,
         {validators: [Validators.required]}),
      city: new FormControl(null ,
         {validators: [Validators.required]}),
      personal_web: new FormControl(),
      facebook: new FormControl(),
      twitter: new FormControl(),
      instagram: new FormControl(),
      linkedin: new FormControl()
    });
  }

  
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.comapnyResumeForm.patchValue({image: file});
    this.comapnyResumeForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    }

}
