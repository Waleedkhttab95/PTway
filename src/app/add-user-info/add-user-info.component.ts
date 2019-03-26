import { Component, OnInit } from '@angular/core';
import { mimeType } from './mime-type.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../my-cv/user.service';

@Component({
  selector: 'app-add-user-info',
  templateUrl: './add-user-info.component.html',
  styleUrls: ['./add-user-info.component.css']
})
export class AddUserInfoComponent implements OnInit {

  constructor(public rest:UserService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  userResumeForm: FormGroup;

  imagePreview: string;
  selectedValue: string;
  currentcountry: string[];

  selectTheme = 'primary';
  countries = [];
  currentstudy_status: string[];
  currentcity: string[];
  cities = [];
  currentmajor: string[];
  majors = [];
  currentuniversty: string[];
  universties = [];
  currentspMajor: string[];
  spMajors = [];
  majorID = "";
  educationId = "";

  study_statuses = [
   
  
   
  ];

  currentstudy_degree: string[];

  study_degrees = [
    {value: 'HS', viewValue: 'الثانوية العامية'},
    {value: 'BHO', viewValue: 'البكالريويس'},
    {value: 'MASTER', viewValue: 'المساتر'},
    {value: 'Undergraduate', viewValue: 'خريج'}
  ];

  currentgender: string[];

  genders = [
    {value: 'male', viewValue: 'ذكر'},
    {value: 'female', viewValue: 'انثى'},
  ];

  

  languages = new FormControl();
  languageList: string[] = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الكورية','أوردو'];

  skills = new FormControl();
  skillList: string[] = ['التصوير الفوتوغرافي', 'الرسم', 'التصميم','التعبير', 'التصميم', 'الرسم', 'التصوير'];
  mySelectionsFromSkils: string[];

  personal_Skills = new FormControl();
  personal_SkillList: string[] = ['الإلقاء', 'التعبير', 'التصميم', 'الرسم', 'التصوير'];
  mySelections: string[];

  hoppies = new FormControl();
  hoppyList: string[] = ['القراءة', 'الكتابة'];

  currentsocial_Status: string[];

  social_Statuss = [
    {value: 'اعزب', viewValue: 'اعزب'},
    {value: 'متزوج', viewValue: 'متزوج'},
  ];

  postuserinfo() {
    console.log(this.userResumeForm.value);
   this.rest.addUserInfo(this.userResumeForm.value);
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

  getmajors() {
    this.majors = [];
    this.rest.getmajors().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
        this.majors.push({ value: data[key]._id, viewValue: data[key].majorName });
        // console.log(this.majorID);
      }
      console.log(this.majors);
    });
  }

  getuniversty() {
    this.universties = [];
    this.rest.getuniversty().subscribe((data: {}) => {
      console.log(data);
      for (let key in data) {
        this.universties.push({ value: data[key]._id, viewValue: data[key].universtyName });
      }
      console.log(this.universties);
    });
  }

  getspMajors(id) {
    this.spMajors = [];
    this.rest.getspMajors(id).subscribe((data) => {
      console.log(data.id);
      for (let key in data) {
        this.spMajors.push({ value: data[key]._id, viewValue: data[key].majorName });
      }
      console.log(this.spMajors);
    });
  }

  ngOnInit() {
    this.getcity();
    this.getcountry();
    this.getmajors();
    this.getuniversty();
    this.userResumeForm = this.fb.group({
      // cvImg: new FormControl(),
      country: new FormControl(),
      image: new FormControl(null , {asyncValidators: [mimeType]}),
      study_degree: new FormControl(),
      fullName: new FormControl(),
      education_degree: new FormControl(),
      gender: new FormControl(),
      mobile: new FormControl(),
      birthDate: new FormControl(),
      city: new FormControl(),
      universty: new FormControl(),
      Education_level: new FormControl(),
      public_Major: new FormControl(),
      spMajor: new FormControl(),
      languages: new FormControl(),
      skills: new FormControl(),
      personal_Skills: new FormControl(),
      hoppies: new FormControl(),
      social_Status: new FormControl(),
      about: new FormControl(),
      personal_web: new FormControl(),
      facebook: new FormControl(),
      twitter: new FormControl(),
      instagram: new FormControl(),
      linkedin: new FormControl()
    });
  }

  checkspMajor(){
    this.majorID = this.userResumeForm.value.public_Major;
    console.log(this.majorID);
    this.getspMajors(this.majorID);
  }

  checkspEducation(){
    this.study_statuses = [];
    this.educationId = this.userResumeForm.value.education_degree;
    if(this.educationId == "HS") {
      this.study_statuses.push(
        {value: 'High-school-first-year', viewValue: 'اول ثانوي'},
        {value: 'High-school-second-year', viewValue: 'ثاني ثانوي'},
        {value: 'High-school-third-year', viewValue: 'ثالث ثانوي'}
      )
    }
   else if(this.educationId == "BHO") {
      this.study_statuses.push(
        {value: 'University-first-year', viewValue: 'اول جامعة'},
    {value: 'University-second-year', viewValue: 'ثاني جامعة'},
    {value: 'University-third-year', viewValue: 'ثالث جامعة'},
    {value: 'University-forth-year', viewValue: 'رابع جامعة'},
    {value: 'University-fith-year', viewValue: 'خامس جامعة'}
      )
    }

    else if(this.educationId == "MASTER") {
      this.study_statuses.push(
        {value: 'master-first-year', viewValue: 'اول ماستر'},
    {value: 'master-second-year', viewValue: 'ثاني ماستر'},
    {value: 'master-third-year', viewValue: 'ثالث ماستر'},
  
      )
    }

  
  }
  limitPS() {
    console.log(this.personal_Skills.value.length);
    console.log(this.personal_Skills.value);
    if (this.personal_Skills.value.length <= 4) {
      this.mySelections = this.personal_Skills.value;
      console.log(this.mySelections);
    } else {
      this.personal_Skills.setValue(this.mySelections);
      console.log(this.personal_Skills.value);
    }
  }
  limitSkils() {
    console.log(this.skills.value.length);
    console.log(this.skills.value);
    if (this.skills.value.length <= 4) {
      this.mySelectionsFromSkils = this.skills.value;
      console.log(this.mySelectionsFromSkils);
    } else {
      this.skills.setValue(this.mySelectionsFromSkils);
      console.log(this.skills.value);
    }
  }


  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.userResumeForm.patchValue({image: file});
    this.userResumeForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    }

}
