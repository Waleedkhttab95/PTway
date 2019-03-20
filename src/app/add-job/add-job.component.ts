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

  addProjcetForm: FormGroup;
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
        console.log(data.id[i])
      }
      if(this.projects.length == 0){
        console.log("inside condtion")
        this.router.navigate(['/error-message']);
      }
      console.log(this.projects.length);
      console.log(this.projects);
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
    this.authService.autoAuthUser();
    this.getprojects(this.authService.getUserId());
    this.getcontracts();
    this.getcountry();
    this.getcity();
    this.getmajors();
    this.getspecialization()
    this.addProjcetForm = new FormGroup({
      country: new FormControl(),
      city: new FormControl(),
      personal_Skills : new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl(),
      public_Major: new FormControl(),
      contracts: new FormControl(),
      startDate: new FormControl(),
      projects: new FormControl(),
      job_Name: new FormControl(),
      job_skills: new FormControl(),
      work_hours: new FormControl(),
      work_days: new FormControl(),
      salary: new FormControl(),
      required_Number: new FormControl(),
    });
  }

  addJob() {


    this.data = {

      contract: this.addProjcetForm.value.contracts,
      project: this.addProjcetForm.value.projects,
      job_Name: this.addProjcetForm.value.job_Name,
      job_skills: this.addProjcetForm.value.job_skills,
      startDate: this.addProjcetForm.value.startDate,
      country: this.addProjcetForm.value.country,
      city: this.addProjcetForm.value.city,
      public_Major: this.addProjcetForm.value.public_Major,
      work_hours: this.addProjcetForm.value.work_hours,
      work_days: this.addProjcetForm.value.work_days,
      salary: this.addProjcetForm.value.salary,
      gender: this.addProjcetForm.value.gender,
      personal_Skills: this.addProjcetForm.value.personal_Skills,
      required_Number: this.addProjcetForm.value.required_Number
    }


    this.rest.addJob(this.data);
  }




}
