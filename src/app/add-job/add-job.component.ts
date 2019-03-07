import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import{JobService} from './job.service'
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(public rest: JobService,public authService : AuthService,
     private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  addProjcetForm: FormGroup;
  selectedValue: string;
  job_Name: string;
  job_skills: string;
  contracts= [];
  currentcontract: string[];
  cities = [];
  currentcity: string[];
  projects = [];
  currentproject: string[];
  countries = [];
  currentcountry: string[];
   data : Object;
  selectTheme = 'primary';

  currentgender: string[];
  genders = [
    {value: 'male', viewValue: 'ذكر'},
    {value: 'female', viewValue: 'انثى'},
  ];

  languages = new FormControl();
  languageList: string[] = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الايطالية'];

  skills = new FormControl();
  skillList: string[] = ['التصوير الفوتوغرافي', 'الرسم', 'التصميم'];

  personal_Skills = new FormControl();
  personal_SkillList: string[] = ['الإلقاء', 'التعبير'];



  getcontracts() {
    this.contracts = [];
    this.rest.getcontracts().subscribe((data: {}) => {
      console.log("Here");
      for(let key in data) {
          this.contracts.push({value:data[key]._id, viewValue:data[key].contractName});
          
      }
      console.log(this.contracts);

    });
  }

  getprojects(id) {

    this.projects = [];
    this.rest.getprojects(id).subscribe((data) => {
      console.log(data.id);
      for (var i =0 ; i < data.count ; i++) {
          this.projects.push({value:data.id[i], viewValue:data.projectName[i]});
          console.log(data.id[i])
      }
      console.log(this.projects);
    });
  }

  getcountry() {
    this.countries = [];
    this.rest.getcountry().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
          this.countries.push({value:data[key]._id, viewValue:data[key].countryName});
          

      }
      console.log(this.countries);
    });
  }

  getcity() {
    this.cities = [];
    this.rest.getcity().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
          this.cities.push({value:data[key]._id, viewValue:data[key].cityName});
      }
      console.log(this.cities);
    });
  }


  ngOnInit() {
        this.authService.autoAuthUser();


    this.getcontracts();
    this.getprojects(this.authService.getUserId());
    this.getcountry();
    this.getcity();
    

    this.addProjcetForm = new FormGroup({
      contracts: new FormControl(),
      projects:  new FormControl(),
      job_Name:  new FormControl(),
      job_skills: new FormControl(),
      country: new FormControl(),
      city: new FormControl(),
      public_Major: new FormControl(),
      work_hours: new FormControl(),
      work_days: new FormControl(),
      salary: new FormControl(),
      gender: new FormControl(),
      personal_Skills: new FormControl(),
      required_Number: new FormControl(),
    });
  }

  addJob() {
  

    this.data = {

      contract: this.addProjcetForm.value.contracts,
      project: this.addProjcetForm.value.projects,
      job_Name: this.addProjcetForm.value.job_Name,
      job_skills: this.addProjcetForm.value.job_skills,
      country:  this.addProjcetForm.value.country,
      city: this.addProjcetForm.value.city,
      public_Major: this.addProjcetForm.value.public_Major,
      work_hours: this.addProjcetForm.value.work_hours,
      work_days: this.addProjcetForm.value.work_days,
      salary: this.addProjcetForm.value.salary,
      gender: this.addProjcetForm.value.gender,
      personal_Skills: this.addProjcetForm.value.personal_Skills,
      required_Number:this.addProjcetForm.value.required_Number
    }


    this.rest.addJob(this.data);
  }


 

}
