import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../my-cv/user.service';
import { mimeType } from '../add-user-info/mime-type.validator';
import { JobService } from '../add-job/job.service';

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.css']
})
export class EditCvComponent implements OnInit {

  constructor(public rest:UserService, private route: ActivatedRoute, private router: Router,
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
  about:  string = "";
  personal_web:  string = "";
  facebook:  string = "";
  twitter:  string = "";
  instagram:  string = "";
  linkedin:  string = "";
  imagePath:  string = "./assets/img/avatar.png";

  study_statuses = [
   
  
   
  ];

  currentstudy_degree: string[];

  study_degrees = [
    {value: 'HS', viewValue: 'ثانوية عامة'},
    {value: 'BHO', viewValue: 'بكالوريوس'},
    {value: 'MASTER', viewValue: 'ماستر'},
    {value: 'diploma', viewValue: 'دبلوم'},
    {value: 'Undergraduate', viewValue: 'خريج'}
  ];

  certificate = [
    {value: 'HS', viewValue: 'ثانوية عامة'},
    {value: 'BHO', viewValue: 'بكالوريوس'},
    {value: 'MASTER', viewValue: 'ماستر'},
    {value: 'diploma', viewValue: 'دبلوم'},
    {value: 'noncertificate', viewValue: 'لايوجد'}
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
  hoppyList: string[] = ['القراءة', 'الكتابة', 'السباحة','الرياضة', 'العاب الفيديو'];

  currentsocial_Status: string[];

  social_Statuss = [
    {value: 'اعزب', viewValue: 'اعزب'},
    {value: 'متزوج', viewValue: 'متزوج'},
  ];



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
    this.userResumeForm = new FormGroup({
      // cvImg: new FormControl(),
      'country': new FormControl(null ),
     // 'image': new FormControl(null , {asyncValidators: [mimeType]}),
      'study_degree': new FormControl(null),
      'fullName': new FormControl(null ),
      'education_degree': new FormControl(null),
      'gender': new FormControl(null ),
      'mobile': new FormControl(null),
      'birthDate': new FormControl(null ),
      'city': new FormControl(null),
      'universty': new FormControl(null),
      'Education_level': new FormControl(null),
      'public_Major': new FormControl(null ),
      'spMajor': new FormControl(null),
      'languages': new FormControl(null),
      'skills': new FormControl(null),
      'personal_Skills': new FormControl(null),
      'hoppies': new FormControl(null),
      'social_Status': new FormControl(null),
      'about':  new FormControl(null),
      'personal_web':  new FormControl(null),
      'facebook':  new FormControl(null),
      'twitter':  new FormControl(null),
      'instagram':  new FormControl(null),
      'linkedin':  new FormControl(null),
    });
    
    this.rest.getUserEdit().subscribe((res:any) =>{
      console.log(res.info.skills)
      this.getspMajors(res.info.public_Major);
      this.checkNull(res.info);
      this.userResumeForm.setValue({
        // cvImg: new FormControl(),
        'country': res.info.country ,
       // 'image': null , {asyncValidators: [mimeType]},
        'study_degree': res.info.study_degree,
        'fullName': res.info.fullName ,
        'education_degree': res.info.education_degree,
        'gender': res.info.gender ,
        'mobile': res.info.mobile,
        'birthDate': res.info.birthDate ,
        'city': res.info.city,
        'universty': res.info.universty,
        'Education_level': res.info.Education_level,
        'public_Major': res.info.public_Major ,
        'spMajor': res.info.spMajor,
        'languages': res.info.languages,
        'skills': res.info.skills,
        'personal_Skills': res.info.personal_Skills,
        'hoppies': res.info.hoppies,
        'social_Status': res.info.social_Status,
        'about':  this.about,
        'personal_web': this.personal_web,
        'facebook': this.facebook,
        'twitter':  this.twitter,
        'instagram':  this.instagram,
        'linkedin':  this.linkedin,
      });
    })
   
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
        {value: 'High-school-third-year', viewValue: 'ثالث ثانوي'},
        {value: 'High-school-fourth-year', viewValue: 'رابع ثانوي'}
      )
    }
   else if(this.educationId == "BHO") {
      this.study_statuses.push(
        {value: 'University-first-year', viewValue: 'فصل أول'},
    {value: 'University-second-year', viewValue: 'فصل ثاني'},
    {value: 'University-third-year', viewValue: 'فصل ثالث'},
    {value: 'University-forth-year', viewValue: 'فصل رابع'},
    {value: 'University-fith-year', viewValue: 'فصل خامس'},
    {value: 'University-sixth-year', viewValue: 'فصل سادس'},
    {value: 'University-seventh-year', viewValue: 'فصل سابع'},
    {value: 'University-eigth-year', viewValue: 'فصل ثامن'},
    {value: 'University-ninth-year', viewValue: 'فصل تاسع'},
    {value: 'University-ten-year', viewValue: 'فصل عاشر'},
      )
    }

    else if(this.educationId == "MASTER") {
      this.study_statuses.push(
        {value: 'master-first-year', viewValue: 'اول ماستر'},
    {value: 'master-second-year', viewValue: 'ثاني ماستر'},
    {value: 'master-third-year', viewValue: 'ثالث ماستر'},
  
      )
    }
    else if(this.educationId == "diploma") {
      this.study_statuses.push(
        {value: 'diploma-first-year', viewValue: 'فصل اول'},
    {value: 'diploma-second-year', viewValue: 'فصل ثاني'},
    {value: 'diploma-third-year', viewValue: 'فصل ثالث'},
    {value: 'diploma-fourth-year', viewValue: 'فصل رابع'},
      )
    }
    else if(this.educationId == "Undergraduate") {
      this.study_statuses.push(
        {value: 'Undergraduate', viewValue: 'خريج'}
  
      )
    }
    
  
  }
  mySelections1: string[];

  changed() {
    
    if (this.userResumeForm.get('skills').value.length < 5) {
      this.mySelections1 = this.userResumeForm.get('skills').value;
     
    } else {
      this.userResumeForm.get('skills').setValue(this.mySelections1);
    }
  }
 
  mySelections2: string[];

  changed2() {
    
    if (this.userResumeForm.get('personal_Skills').value.length < 5) {
      this.mySelections2 = this.userResumeForm.get('personal_Skills').value;
     
    } else {
      this.userResumeForm.get('personal_Skills').setValue(this.mySelections2);
    }
  }

  postuserinfo() {
  
  
console.log(this.userResumeForm.value)
  this.rest.updateUserInfo(this.userResumeForm.value);
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

    checkNull(res) {
      if(res.personal_web != "null") this.personal_web= res.personal_web ;
      if(res.about != "null") this.about= res.about ;
      if(res.facebook != "null") this.facebook= res.facebook ;
      if(res.twitter != "null") this.twitter= res.twitter ;
      if(res.instagram != "null") this.instagram= res.instagram ;
      if(res.linkedin != "null") this.linkedin= res.linkedin ;
      if(res.imagePath != "null") this.imagePath= res.imagePath ;
    }
  

}
