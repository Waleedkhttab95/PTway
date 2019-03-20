import { Component, OnInit } from '@angular/core';
import { UserService } from '../my-cv/user.service';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.css']
})
export class CvPreviewComponent implements OnInit {

  country: string;
  study_degree : string;
  fullName:  string;
  education_degree:  string;
  gender:  string;
  mobile:  string;
  birthDate:  string;
  city:  string;
  universty: string;
  Education_level:  string;
  public_Major:  string;
  spMajor:  string;
  languages:  string;
  skills:  string;
  personal_Skills:  string;
  hoppies:  string;
  social_Status:  string;
  about:  string;
  personal_web:  string;
  facebook:  string;
  twitter:  string;
  instagram:  string;
  linkedin:  string;
  imagePath:  string;

  constructor(public userService: UserService, public authService: AuthService, public dataService: DataService) { }

  ngOnInit() {
     // to get user info
     this.userService.getUserInfoById(this.dataService.getStoreDataUser()).subscribe((res: any) =>{
      console.log(res);
      // the same syntax res. 
      this.country= res.country;
      this.study_degree = res.study_degree;
      this.fullName=  res.fullName;
      this.education_degree=  res.education_degree;
      this.gender=  res.gender;
      this.mobile=  res.mobile;
      this.birthDate=  res.birthDate;
      this.city=  res.city;
      this.universty= res.universty;
      this.Education_level=  res.Education_level;
      this.public_Major=  res.public_Major;
      this.spMajor=  res.spicifc_Major;
      this.languages=  res.languages;
      this.skills=  res.skills;
      this.personal_Skills=  res.personal_Skills;
      this.hoppies=  res.hoppies;
      this.social_Status=  res.social_Status;
      this.about=  res.about;
      this.personal_web=  res.personal_web;
      this.facebook=  res.facebook;
      this.twitter=  res.twitter;
      this.instagram=  res.instagram;
      this.linkedin=  res.linkedin;
      this.imagePath=  res.imagePath;
  })

  }

}
