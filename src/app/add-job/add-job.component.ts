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
    { value: 'ذكر', viewValue: 'ذكر' },
    { value: 'انثى', viewValue: 'انثى' },
  ];

  languages = new FormControl();
  languageList: string[] = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الكورية','أوردو'];

  

  personal_Skills = new FormControl();
  personal_SkillList = []
//   personal_SkillList: string[] =  ['التعامل مع الجمهور', 'التواصل الفعال', 
//   'حل المشكلات', 'العمل من خلال الفريق', 'القدرة على الالقاء',
//   'التفكير الابداعي', 'تقب التوجه','المبادرة', 'اتخاذ القرارات'
// ,'الالتزام و تحمل المسؤولية', 'ادارة الوقت','العمل تحت الضغط','التعامل مع المواقف الصعبة'
// ,'التفاوض و الافناع','ادارة الأزمات', 'القدرة على التكيف و المرونة'
// ];



  getcontracts() {
    this.contracts = [];
    this.rest.getcontracts().subscribe((data: {}) => {
      for (let key in data) {
        this.contracts.push({ value: data[key]._id, viewValue: data[key].contractName });

      }

    });
  }

  getskills() {
    this.personal_SkillList = [];
    this.rest.getPersonalSkills().subscribe((data: {}) => {
      for (let key in data) {
        this.personal_SkillList.push({ value: data[key]._id, viewValue: data[key].skillName });

      }

    });
  }
  getspecialization() {
    this.CompanySpecialists = [];
    this.signSerive.getspecialization().subscribe((data: {}) => {
      for (let key in data) {
        this.CompanySpecialists.push({ value: data[key]._id, viewValue: data[key].specialistName });
      }
    });
  }

  getprojects(id) {
    this.projects = [];
    this.rest.getprojects(id).subscribe((data) => {
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
      for (let key in data) {
        this.countries.push({ value: data[key]._id, viewValue: data[key].countryName });
      }
    });
  }

  getmajors() {
    this.majors = [];
    this.userSerivce.getmajors().subscribe((data: {}) => {
 
      for (let key in data) {
        this.majors.push({ value: data[key]._id, viewValue: data[key].majorName });
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


  ngOnInit() {
    this.isLoading=true;
    this.authService.autoAuthUser();
    this.getprojects(this.authService.getUserId());
    this.getcontracts();
    this.getcountry();
    this.getcity();
    this.getmajors();
    this.getskills();
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

    this.rest.addJob(this.data);
  }




}
