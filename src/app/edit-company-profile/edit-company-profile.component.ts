import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { CompanyService } from '../company-profile/company.service';

@Component({
  selector: 'app-edit-company-profile',
  templateUrl: './edit-company-profile.component.html',
  styleUrls: ['./edit-company-profile.component.css']
})
export class EditCompanyProfileComponent implements OnInit {

  comapnyResumeForm: FormGroup;
  dataForm: Object;
  selectedValue: string;
  currentcountry: string[];

  selectTheme = 'primary';
  countries = [
    { value: 'SA', viewValue: 'المملكة العربية السعودية' },
    { value: 'UAE', viewValue: 'الامارات العربية المتحدة' },
    { value: 'OMAN', viewValue: 'عمان' },
    { value: 'KWUIT', viewValue: 'الكويت' },
    { value: 'SYRIA', viewValue: 'سوريا' },
    { value: 'JORDAN', viewValue: 'الآردن' },
  ];


  currentcity: string[];

  cities = [
    { value: 'الرياض', viewValue: 'الرياض' },
    { value: 'الدمام', viewValue: 'الدمام' },
    { value: 'جدة', viewValue: 'جدة' },
    { value: 'القصيم', viewValue: 'القصيم' },
    { value: 'مكة المكرمة', viewValue: 'مكة المكرمة' },
    { value: 'المدينة المنورة', viewValue: 'المدينة المنورة' },
  ];

  

  constructor(public companyService: CompanyService,public rest: RestService, 
    private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.comapnyResumeForm = this.fb.group({
      country: new FormControl(),
      address: new FormControl(),
      info: new FormControl(),
      vision: new FormControl(),
      message: new FormControl(),
      city: new FormControl(),
      personal_web: new FormControl(),
      facebook: new FormControl(),
      twitter: new FormControl(),
      instagram: new FormControl(),
      linkedin: new FormControl()
    });

    
    this.companyService.getCompanyInfo().subscribe((result:any) =>{
      console.log(result);
      this.comapnyResumeForm.setValue({
        country: result.country,
        city: result.city,
        address: result.address,
        info: result.info,
        vision: result.vision,
        message: result.message,
        personal_web:  result.personal_web,
        facebook: result.facebook,
        twitter: result.twitter,
        instagram: result.instagram,
        linkedin: result.linkedin
      })
    })
  }

  onUpdate() {
   console.log(this.comapnyResumeForm.value);
  }

}
