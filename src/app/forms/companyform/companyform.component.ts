import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.css']
})
export class CompanyformComponent implements OnInit {

  comapnyResumeForm: FormGroup;

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

    
    currentcity: string[];

    cities = [
      {value: 'الرياض', viewValue: 'الرياض'},
      {value: 'الدمام', viewValue: 'الدمام'},
      {value: 'جدة', viewValue: 'جدة'},
      {value: 'القصيم', viewValue: 'القصيم'},
      {value: 'مكة المكرمة', viewValue: 'مكة المكرمة'},
      {value: 'المدينة المنورة', viewValue: 'المدينة المنورة'},
    ];

  postcompanyinfo() {
    console.log(this.comapnyResumeForm.value);
    this.rest.postcompanyinfo(this.comapnyResumeForm.value).subscribe((result) => {
      this.router.navigate(['/dashboard/']);
    }, (err) => {
      console.log(err);
    });
  }

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

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
  }

}
