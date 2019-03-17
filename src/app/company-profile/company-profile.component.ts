import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(public companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanyInfo().subscribe((res: any) =>{
      console.log(res.info);
      // the same syntax res. 
   
  })
  }

}
