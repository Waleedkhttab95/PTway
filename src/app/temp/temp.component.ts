import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../my-cv/user.service';
import { JobService } from '../add-job/job.service';
import swal from 'sweetalert2';
declare var $: any;


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class tempComponent implements OnInit {

  constructor(public rest:UserService, private route: ActivatedRoute, private router: Router,
    public jobService : JobService) { }

    userTempForm: FormGroup;

  imagePreview: string;
  selectedValue: string;
  currentcountry: string[];
    validData: boolean;
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
    {value: 'HS', viewValue: 'ثانوية عامة'},
    {value: 'BHO', viewValue: 'بكالوريوس'},
    {value: 'MASTER', viewValue: 'ماجستير'},
    {value: 'diploma', viewValue: 'دبلوم'},
  ];

  certificate = [
    {value: 'HS', viewValue: 'ثانوية عامة'},
    {value: 'BHO', viewValue: 'بكالوريوس'},
    {value: 'MASTER', viewValue: 'ماجستير'},
    {value: 'diploma', viewValue: 'دبلوم'},
    {value: 'noncertificate', viewValue: 'لايوجد'}
  ];

  currentgender: string[];

  genders = [
    {value: 'ذكر', viewValue: 'ذكر'},
    {value: 'انثى', viewValue: 'انثى'},
  ];

  nationality = [
    {value: 'saudi', viewValue: 'سعودي'},
    {value: 'non-saudi', viewValue: 'غير سعودي'},
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
    this.validData = false;
    this.getcity();
    this.getSkills();
    this.getPersonalskills(); 
    this.getcountry();
    this.getmajors();
    this.getuniversty();
    this.userTempForm = new FormGroup({
      // cvImg: new FormControl(),
      'major': new FormControl(null ,
        {validators: [Validators.required]}),
      'study_degree': new FormControl(null ,
        {validators: [Validators.required]}),
      'fullName': new FormControl(null ,
        {validators: [Validators.required]}),
      'gpa': new FormControl(null ,
        {validators: [Validators.required]}),
      'gender': new FormControl(null ,
        {validators: [Validators.required]}),
      'mobile': new FormControl(null ,
        {validators: [Validators.required]}),
      'about': new FormControl(null),
      'nationalty': new FormControl(null ,
        {validators: [Validators.required]}),
      'email': new FormControl(null ,
        {validators: [Validators.required]}),
      'birthDate': new FormControl(null ,
        {validators: [Validators.required]}),
      'city': new FormControl(null ,
        {validators: [Validators.required]}),
      'universty': new FormControl(null ,
        {validators: [Validators.required]}),
      'work1': new FormControl(null),
      'workname1': new FormControl(null),
      'date_work1': new FormControl(null),
      'work2': new FormControl(null),
      'workname2': new FormControl(null),
      'date_work2': new FormControl(null),
      'work3': new FormControl(null),
      'workname3': new FormControl(null),
      'date_work3': new FormControl(null),

      'skill1': new FormControl(null),
      'skill2': new FormControl(null),
      'skill3': new FormControl(null),
      'skill4': new FormControl(null),
      'course1': new FormControl(null),
      'course2': new FormControl(null),
      'course3': new FormControl(null),
      'course4': new FormControl(null),
    });
  }




  postuserinfo() {

    if(this.userTempForm.get('fullName').invalid || this.userTempForm.get('city').invalid
    || this.userTempForm.get('mobile').invalid || this.userTempForm.get('gender').invalid ||
    this.userTempForm.get('email').invalid || this.userTempForm.get('nationalty').invalid
    || this.userTempForm.get('birthDate').invalid|| this.userTempForm.get('major').invalid
    || this.userTempForm.get('universty').invalid|| this.userTempForm.get('gpa').invalid
    || this.userTempForm.get('study_degree').invalid) {
      this.validData = true;
      return;
    }
    console.log(this.userTempForm.value)
  this.rest.add_temp_data(this.userTempForm.value);
  }


    showSwal(type){
    
    if (type == 'warning-message') {
      swal({
        title: "تم الإرسال!",
        text: "تم إرسال معلوماتك و سوف يتم التواصل معكم قريبا , شكرا لك",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning",
        type: "success"
      }).catch(swal.noop)
    }
    }
}
