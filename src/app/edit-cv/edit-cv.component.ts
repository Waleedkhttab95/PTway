import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../my-cv/user.service';
import { mimeType } from '../add-user-info/mime-type.validator';

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.css']
})
export class EditCvComponent implements OnInit {

  constructor(public rest:UserService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  userResumeForm: FormGroup;

  imagePreview: string;
  selectedValue: string;
  currentcountry: string[];
  personal_web :string = '';
  facebook :string = '';
  twitter :string = '';
  instagrm :string = '';
  linkedin :string = '';
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

  study_statuses = [
    {value: 'High-school-first-year', viewValue: 'اول ثانوي'},
    {value: 'High-school-second-year', viewValue: 'ثاني ثانوي'},
    {value: 'High-school-third-year', viewValue: 'ثالث ثانوي'},
    {value: 'University-first-year', viewValue: 'اول جامعة'},
    {value: 'University-second-year', viewValue: 'ثاني جامعة'},
    {value: 'University-third-year', viewValue: 'ثالث جامعة'},
    {value: 'University-forth-year', viewValue: 'رابع جامعة'},
    {value: 'University-fith-year', viewValue: 'خامس جامعة'},
    {value: 'Undergraduate', viewValue: 'خريج'},
  ];

  currentstudy_degree: string[];

  study_degrees = [
    {value: 'HS', viewValue: 'الثانوية العامية'},
    {value: 'BHO', viewValue: 'البكالريويس'},
    {value: 'MASTER', viewValue: 'المساتر'},
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

    this.rest.getUserInfo().subscribe((res: any) =>{
      console.log(res);
      // the same syntax res. 

      if(res.personal_web != 'null') this.personal_web = res.personal_web;
      if(res.facebook != 'null') this.facebook = res.facebook;
      if(res.twitter != 'null') this.twitter = res.twitter;
      if(res.instagram != 'null') this.instagrm = res.instagram;
      if(res.linkedin != 'null') this.linkedin = res.linkedin;

      this.userResumeForm.setValue({
        country: [res.country],
        study_degree : [res.study_degree],
        fullName:  'waleed',
        education_degree:  [res.education_degree],
        gender:  [res.gender],
        mobile:  res.mobile,
        birthDate:  res.birthDate,
        city:  [res.city],
        universty: [res.universty],
        Education_level: [ res.Education_level],
        public_Major:[ res.public_Major],
        spMajor: [res.spicifc_Major],
        languages:  [res.languages],
        skills: [ res.skills],
        personal_Skills:  [res.personal_Skills],
        hoppies: [ res.hoppies],
        social_Status: [ res.social_Status],
        about:  res.about,
        personal_web:  res.personal_web,
        facebook:  res.facebook,
        twitter:  res.twitter ,
        instagram:  res.instagram,
        linkedin:  res.linkedin,
        image:  res.imagePath
      })
 
  })
  }

  onSubmit() {
    console.log(this.userResumeForm.value)
    this.rest.updateUserInfo(this.userResumeForm.value);
  }
  checkspMajor(){
    this.majorID = this.userResumeForm.value.public_Major;
    console.log(this.majorID);
    this.getspMajors(this.majorID);
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
