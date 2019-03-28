import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { CompanyService } from '../company-profile/company.service';
import { JobService } from '../add-job/job.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-company-profile',
  templateUrl: './edit-company-profile.component.html',
  styleUrls: ['./edit-company-profile.component.css']
})
export class EditCompanyProfileComponent implements OnInit {

  comapnyResumeForm: FormGroup;
  dataForm: Object;
  selectedValue: string;
  currentcountry: string[];
  personal_web :string = '';
  facebook :string = '';
  twitter :string = '';
  instagrm :string = '';
  linkedin :string = '';
  selectTheme = 'primary';
  countries = [
  ];


  currentcity: string[];

  cities = [
    
  ];

  

  constructor(public companyService: CompanyService,public rest: RestService, 
    private route: ActivatedRoute, private router: Router, private fb: FormBuilder,public jobService: JobService) { }


    getcountry() {
      this.countries = [];
      this.jobService.getcountry().subscribe((data: {}) => {
        for (let key in data) {
          this.countries.push({ value: data[key]._id, viewValue: data[key].countryName });
        }
      });
    }
  
    getcity() {
      this.cities = [];
      this.jobService.getcity().subscribe((data: {}) => {
        for (let key in data) {
          this.cities.push({ value: data[key]._id, viewValue: data[key].cityName });
        }
      });
    }

    
  ngOnInit() {
    this.getcity()
    this.getcountry()

    this.comapnyResumeForm = this.fb.group({
      country: new FormControl(),
      address: new FormControl(),
      info: new FormControl(),
      vision: new FormControl(),
      message: new FormControl(),
      city: new FormControl(),
      personal_web: new FormControl(),
      facebook: new FormControl(),
      twitter: new FormControl(),
      instagram: new FormControl(),
      linkedin: new FormControl()
    });

    
    this.companyService.getCompanyInfo().subscribe((result:any) =>{
      
      if(result.personal_web != 'null') this.personal_web = result.personal_web;
      if(result.facebook != 'null') this.facebook = result.facebook;
      if(result.twitter != 'null') this.twitter = result.twitter;
      if(result.instagram != 'null') this.instagrm = result.instagram;
      if(result.linkedin != 'null') this.linkedin = result.linkedin;

      this.comapnyResumeForm.setValue({
        country: result.country,
        city: result.city,
        address: result.address,
        info: result.info,
        vision: result.vision,
        message: result.message,
        personal_web:  this.personal_web,
        facebook: this.facebook,
        twitter: this.twitter,
        instagram: this.instagrm,
        linkedin: this.linkedin
      })
    })
  }

  onUpdate() {
  }

}
