import { Component, OnInit } from '@angular/core';
import { mimeType } from './mime-type.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../my-cv/user.service';
import { JobService } from '../add-job/job.service';

@Component({
  selector: 'app-add-user-info',
  templateUrl: './add-user-info.component.html',
  styleUrls: ['./add-user-info.component.css']
})
export class AddUserInfoComponent implements OnInit {

  constructor(public rest:UserService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder,
    public jobService : JobService) { }

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

  certificate = [
    {value: 'HS', viewValue: 'الثانوية العامية'},
    {value: 'BHO', viewValue: 'البكالريويس'},
    {value: 'MASTER', viewValue: 'المساتر'}
  ];

  currentgender: string[];

  genders = [
    {value: 'ذكر', viewValue: 'ذكر'},
    {value: 'انثى', viewValue: 'انثى'},
  ];

  

  languages = new FormControl();
  languageList: string[] = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الكورية','أوردو'];

  skills = new FormControl();
  skillList= []
  // skillList: string[] = ['التصوير الفوتوغرافي', 'خدمة العملاء', 
  // 'التنسيق','إدارة الاجتماعات','التنظيم و التخطيط', 'كتابة التقارير',
  //  'سرعة الطباعة', 'ادخال البيانات', 'مهارات الاعمال الحسابية',
  // 'الدقة', 'مهارات البحث و استخراج المعلومات','اعداد العروض التقديمية','اعداد تقرير احصائي'];
  mySelectionsFromSkils: string[];

  personal_Skills = new FormControl();
  personal_SkillList= []
//   personal_SkillList: string[] = ['التعامل مع الجمهور', 'التواصل الفعال', 
//   'حل المشكلات', 'العمل من خلال الفريق', 'القدرة على الالقاء',
//   'التفكير الابداعي', 'تقب التوجه','المبادرة', 'اتخاذ القرارات'
// ,'الالتزام و تحمل المسؤولية', 'ادارة الوقت','العمل تحت الضغط','التعامل مع المواقف الصعبة'
// ,'التفاوض و الافناع','ادارة الأزمات', 'القدرة على التكيف و المرونة'
// ];
  mySelections: string[];

  hoppies = new FormControl();
  hoppyList: string[] = ['القراءة', 'الكتابة'];

  currentsocial_Status: string[];

  social_Statuss = [
    {value: 'اعزب', viewValue: 'اعزب'},
    {value: 'متزوج', viewValue: 'متزوج'},
  ];

  postuserinfo() {
    if (this.userResumeForm.invalid) {
      return;
    }
   this.rest.addUserInfo(this.userResumeForm.value);
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

  getPersonalskills() {
    this.personal_SkillList = [];
    this.jobService.getPersonalSkills().subscribe((data: {}) => {
      for (let key in data) {
        this.personal_SkillList.push({ value: data[key]._id, viewValue: data[key].skillName });

      }

    });
  }

  
  getSkills() {
    this.skillList= [];
    this.jobService.getSkills().subscribe((data: {}) => {
      for (let key in data) {
        this.skillList.push({ value: data[key]._id, viewValue: data[key].skillName });

      }

    });
  }


  getmajors() {
    this.majors = [];
    this.rest.getmajors().subscribe((data: {}) => {
      for (let key in data) {
        this.majors.push({ value: data[key]._id, viewValue: data[key].majorName });
      }
    });
  }

  getuniversty() {
    this.universties = [];
    this.rest.getuniversty().subscribe((data: {}) => {
      for (let key in data) {
        this.universties.push({ value: data[key]._id, viewValue: data[key].universtyName });
      }
    });
  }

  getspMajors(id) {
    this.spMajors = [];
    this.rest.getspMajors(id).subscribe((data) => {
      for (let key in data) {
        this.spMajors.push({ value: data[key]._id, viewValue: data[key].majorName });
      }
    });
  }

  ngOnInit() {
    this.getcity();
    this.getSkills();
    this.getPersonalskills();
    this.getcountry();
    this.getmajors();
    this.getuniversty();
    this.userResumeForm = this.fb.group({
      // cvImg: new FormControl(),
      country: new FormControl(null ,
        {validators: [Validators.required]}),
      image: new FormControl(null , {asyncValidators: [mimeType]}),
      study_degree: new FormControl(null ,
         {validators: [Validators.required]}),
      fullName: new FormControl(null ,
         {validators: [Validators.required]}),
      education_degree: new FormControl(null ,
         {validators: [Validators.required]}),
      gender: new FormControl(null ,
         {validators: [Validators.required]}),
      mobile: new FormControl(null ,
         {validators: [Validators.required]}),
      birthDate: new FormControl(null ,
         {validators: [Validators.required]}),
      city: new FormControl(null ,
         {validators: [Validators.required]}),
      universty: new FormControl(null ,
         {validators: [Validators.required]}),
      Education_level: new FormControl(null ,
         {validators: [Validators.required]}),
      public_Major: new FormControl(null ,
         {validators: [Validators.required]}),
      spMajor: new FormControl(null ,
         {validators: [Validators.required]}),
      languages: new FormControl(null ,
         {validators: [Validators.required]}),
      skills: new FormControl(null ,
         {validators: [Validators.required]}),
      personal_Skills: new FormControl(null ,
         {validators: [Validators.required]}),
      hoppies: new FormControl(null ,
         {validators: [Validators.required]}),
      social_Status: new FormControl(null ,
         {validators: [Validators.required]}),
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
    if (this.personal_Skills.value.length <= 4) {
      this.mySelections = this.personal_Skills.value;
    } else {
      this.personal_Skills.setValue(this.mySelections);
    }
  }
  limitSkils() {
    if (this.skills.value.length <= 4) {
      this.mySelectionsFromSkils = this.skills.value;
    } else {
      this.skills.setValue(this.mySelectionsFromSkils);
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
