import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  userResumeForm: FormGroup;

  selectedValue: string;
  currentcountry: string[];

  selectTheme = 'primary';
  
  
 
  countries = [
    {value: 'SA', viewValue: 'المملكة العربية السعودية'},
    {value: 'UAE', viewValue: 'الامارات العربية المتحدة'},
    {value: 'OMAN', viewValue: 'عمان'},
    {value: 'KWUIT', viewValue: 'الكويت'},
    {value: 'SYRIA', viewValue: 'سوريا'},
    {value: 'JORDAN', viewValue: 'الآردن'},
  ];

  currentstudy_status: string[];

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

  currentcity: string[];

  cities = [
    {value: 'الرياض', viewValue: 'الرياض'},
    {value: 'الدمام', viewValue: 'الدمام'},
    {value: 'جدة', viewValue: 'جدة'},
    {value: 'القصيم', viewValue: 'القصيم'},
    {value: 'مكة المكرمة', viewValue: 'مكة المكرمة'},
    {value: 'المدينة المنورة', viewValue: 'المدينة المنورة'},
  ];

  languages = new FormControl();
  languageList: string[] = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الايطالية'];

  skills = new FormControl();
  skillList: string[] = ['التصوير الفوتوغرافي', 'الرسم', 'التصميم'];

  personal_Skills = new FormControl();
  personal_SkillList: string[] = ['الإلقاء', 'التعبير'];

  hoppies = new FormControl();
  hoppyList: string[] = ['القراءة', 'الكتابة'];

  currentsocial_Status: string[];

  social_Statuss = [
    {value: 'اعزب', viewValue: 'اعزب'},
    {value: 'متزوج', viewValue: 'متزوج'},
  ];

  


  postuserinfo() {
    console.log(this.userResumeForm.value);
    this.rest.postuserinfo(this.userResumeForm.value).subscribe((result) => {
      this.router.navigate(['/dashboard/']);
    }, (err) => {
      console.log(err);
    });
  }



  ngOnInit() {


    this.userResumeForm = this.fb.group({
      country: new FormControl(),
      study_status: new FormControl(),
      study_degree: new FormControl(),
      education_degree: new FormControl(),
      gender: new FormControl(),
      mobile: new FormControl(),
      birthDate: new FormControl(),
      city: new FormControl(),
      Education_level: new FormControl(),
      public_Major: new FormControl(),
      spicifc_Major: new FormControl(),
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

}
