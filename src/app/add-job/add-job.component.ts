import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JobService } from './job.service';
import { AuthService } from '../auth/auth.service';
import { SignUpService } from '../sign-up/sign-up.service';
import { UserService } from '../my-cv/user.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(public rest: JobService, public authService: AuthService,
    private route: ActivatedRoute, private router: Router,
private fb: FormBuilder, public signSerive: SignUpService, public userSerivce: UserService) { }

  isLoading=false;

  addJobForm: FormGroup;
  selectedValue: string;
  startDate: Date;
  job_Name: string;
  job_skills: string;
  currentCompanySpecialist: string[];
  CompanySpecialists = [];
  contracts = [];
  currentcontract: string[];
  cities = [];
  currentcity: string[];
  projects = [];
  currentproject: string[];
  countries = [];
  currentcountry: string[];
  data: Object;
  majors = [];
  selectTheme = 'primary';

  currentgender: string[];
  genders = [
    { value: 'male', viewValue: 'ذكر' },
    { value: 'female', viewValue: 'انثى' },
  ];

  languages = new FormControl();
  languageList: string[] = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الايطالية'];

  

  personal_Skills = new FormControl();
  personal_SkillList: string[] = ['الإلقاء', 'التعبير'];



  getcontracts() {
    this.contracts = [];
    this.rest.getcontracts().subscribe((data: {}) => {
      console.log("Here");
      for (let key in data) {
        this.contracts.push({ value: data[key]._id, viewValue: data[key].contractName });

      }
      console.log(this.contracts);

    });
  }

  getspecialization() {
    this.CompanySpecialists = [];
    this.signSerive.getspecialization().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
        this.CompanySpecialists.push({ value: data[key]._id, viewValue: data[key].specialistName });
      }
      console.log(this.CompanySpecialists);
    });
  }

  getprojects(id) {
    this.projects = [];
    this.rest.getprojects(id).subscribe((data) => {
      console.log(data.id);
      for (var i = 0; i < data.count; i++) {
        this.projects.push({ value: data.id[i], viewValue: data.projectName[i] });
        
      }
      if(this.projects.length == 0){
        this.router.navigate(['/error-message']);
      }
     
    });
  }

  getcountry() {
    this.countries = [];
    this.rest.getcountry().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
        this.countries.push({ value: data[key]._id, viewValue: data[key].countryName });
      }
      console.log(this.countries);
    });
  }

  getmajors() {
    this.majors = [];
    this.userSerivce.getmajors().subscribe((data: {}) => {
 
      for (let key in data) {
        this.majors.push({ value: data[key]._id, viewValue: data[key].majorName });
        // console.log(this.majorID);
      }
     
    });
  }

  getcity() {
    this.cities = [];
    this.rest.getcity().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
        this.cities.push({ value: data[key]._id, viewValue: data[key].cityName });
      }
      console.log(this.cities);
    });
  }


  ngOnInit() {
    this.isLoading=true;
    this.authService.autoAuthUser();
    this.getprojects(this.authService.getUserId());
    this.getcontracts();
    this.getcountry();
    this.getcity();
    this.getmajors();
    this.getspecialization()
    this.addJobForm = new FormGroup({
      country: new FormControl(null ,
         {validators: [Validators.required]}),
      city: new FormControl(null ,
         {validators: [Validators.required]}),
      personal_Skills : new FormControl(null ,
        {validators: [Validators.required]}),
      gender: new FormControl(null ,
         {validators: [Validators.required]}),
      public_Major: new FormControl(null ,
         {validators: [Validators.required]}),
      contracts: new FormControl(null ,
         {validators: [Validators.required]}),
      startDate: new FormControl(null ,
         {validators: [Validators.required]}),
      projects: new FormControl(null ,
         {validators: [Validators.required]}),
      job_Name: new FormControl(null ,
         {validators: [Validators.required]}),
      job_skills: new FormControl(null ,
         {validators: [Validators.required]}),
      work_hours: new FormControl(null ,
         {validators: [Validators.required]}),
      work_days: new FormControl(null ,
         {validators: [Validators.required]}),
      salary: new FormControl(null ,
         {validators: [Validators.required]}),
      required_Number: new FormControl(null ,
         {validators: [Validators.required]}),
    });
    this.isLoading=false;
   
  }

  addJob() {

    if (this.addJobForm.invalid) {
      return;
    }

    this.data = {

      contract: this.addJobForm.value.contracts,
      project: this.addJobForm.value.projects,
      job_Name: this.addJobForm.value.job_Name,
      // job_skills: this.addJobForm.value.job_skills,
      startDate: this.addJobForm.value.startDate,
      country: this.addJobForm.value.country,
      city: this.addJobForm.value.city,
      public_Major: this.addJobForm.value.public_Major,
      work_hours: this.addJobForm.value.work_hours,
      work_days: this.addJobForm.value.work_days,
      salary: this.addJobForm.value.salary,
      gender: this.addJobForm.value.gender,
      personal_Skills: this.addJobForm.value.personal_Skills,
      required_Number: this.addJobForm.value.required_Number
    }

    console.log(this.data);
    this.rest.addJob(this.data);
  }




}
