import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import{JobService} from './job.service'

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(public rest:JobService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  addProjcetForm: FormGroup;
  selectedValue: string;

  contracts = [];
  currentcontract: string[];
  cities = [];
  currentcity: string[];
  projects = [];
  currentproject: string[];
  countries = [];
  currentcountry: string[];

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

  // postuserinfo() {
  //   console.log(this.addProjcetForm.value);
  //   this.rest.postuserinfo(this.addProjcetForm.value).subscribe((result) => {
  //     this.router.navigate(['/dashboard/']);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  getcontracts() {
    this.contracts = [];
    this.rest.getcontracts().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
          this.contracts.push({value:data[key]._id, viewValue:data[key].contractName});
      }
      console.log(this.contracts);
    });
  }

  getprojects() {
    this.projects = [];
    this.rest.getprojects().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
          this.projects.push({value:data[key]._id, viewValue:data[key].projectName});
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
    this.getcontracts();
    this.getprojects();
    this.getcountry();
    this.getcity();

    this.addProjcetForm = this.fb.group({
      contract: new FormControl(),
      project:  new FormControl(),
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

}
