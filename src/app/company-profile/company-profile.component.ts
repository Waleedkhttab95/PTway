import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor(public companyService:CompanyService, public authService: AuthService) { }

  imagePath: string;
  country: string;
  city: string;
  companyName: string;
  address: string;
  info: string;
  vision: string;
  message: string;
  personal_web: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;

  ngOnInit() {
    this.companyService.getCompanyInfo().subscribe((res: any) =>{
      this.authService.autoAuthUser();
      this.companyName = this.authService.getCompanyName();
    
      
      this.country = res.country;
      this.city = res.city;
      this.address = res.address;
      this.info = res.info;
      this.vision = res.vision;
      this.message = res.message;
      if(res.personal_web != "null") this.personal_web= res.personal_web ;
      if(res.facebook != "null") this.facebook= res.facebook ;
      if(res.twitter != "null") this.twitter= res.twitter ;
      if(res.instagram != "null") this.instagram= res.instagram ;
      if(res.linkedin != "null") this.linkedin= res.linkedin ;
      if(res.imagePath != "null") this.imagePath= res.imagePath ;
     
   
  })
  }

}
