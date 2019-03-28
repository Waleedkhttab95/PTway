import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {

  country: string = "";
  study_degree : string = "";
  fullName:  string = "";
  education_degree:  string = "";
  gender:  string = "";
  mobile:  string = "";
  birthDate:  string = "";
  city:  string = "";
  universty: string = "";
  Education_level:  string = "";
  public_Major:  string = "";
  spMajor:  string = "";
  languages:  string = "";
  skills:  string = "";
  personal_Skills:  string = "";
  hoppies:  string = "";
  social_Status:  string = "";
  about:  string = "";
  personal_web:  string = "";
  facebook:  string = "";
  twitter:  string = "";
  instagram:  string = "";
  work_Hours: Number;
  linkedin:  string = "";
  imagePath:  string = "";
  isLoading = false;

  constructor(public userService: UserService, public authService: AuthService) { }

  ngOnInit() {


    
      // to get user info
      this.isLoading = true;
      this.userService.getUserInfo().subscribe((res: any) =>{
        
     
       

        // the same syntax res. 
        this.handling(res);
        
        this.country= res.country;
        this.fullName=  res.fullName;
        this.gender=  res.gender;
        this.mobile=  res.mobile;
        this.birthDate=  this.DateFormat(res.birthDate);;
        this.city=  res.city;
        this.universty= res.universty;
        this.public_Major=  res.public_Major;
        this.work_Hours = res.work_Hours;
        this.spMajor=  res.spicifc_Major;
        this.languages=  res.languages;
        this.skills=  res.skills;
        this.personal_Skills=  res.personal_Skills;
        this.hoppies=  res.hoppies;
        this.social_Status=  res.social_Status;
        this.about=  res.about;

   

        this.isLoading = false;
     
    })


  }

  handling(res) {

    if(res.study_degree == 'HS') this.study_degree = "الثانوية العامة";
    else if(res.study_degree == 'BHO') this.study_degree = "البكالريوس";
    else if(res.study_degree == 'MASTER') this.study_degree = "الماستر";

    if(res.education_degree == 'HS') this.education_degree = "الثانوية العامة";
    else if(res.education_degree == 'BHO') this.education_degree = "البكالريوس";
    else if(res.education_degree == 'MASTER') this.education_degree = "الماستر";
    else if(res.education_degree == 'Undergraduate') this.education_degree = "خريج";

    if(res.Education_level == 'High-school-first-year') this.Education_level = "اول ثانوي";
    else if(res.Education_level == 'High-school-second-year') this.Education_level = "ثاني ثنوي";
    else if(res.Education_level == 'High-school-third-year') this.Education_level = "ثالث ثنوي";
    else if(res.Education_level == 'University-first-year') this.Education_level = "اول جامعة";
    else if(res.Education_level == 'University-second-year') this.Education_level = "ثاني جامعة";
    else if(res.Education_level == 'University-third-year') this.Education_level = "ثالث جامعة";
    else if(res.Education_level == 'University-forth-year') this.Education_level = "رابع جامعة";
    else if(res.Education_level == 'University-fith-year') this.Education_level = "خامس جامعة";
    else if(res.Education_level == 'master-first-year') this.Education_level = "اول ماستر";
    else if(res.Education_level == 'master-second-year') this.Education_level = "ثاني ماستر";
    else if(res.Education_level == 'master-third-year') this.Education_level = "ثالث ماستر";


    if(res.personal_web != "null") this.personal_web= res.personal_web ;
    if(res.facebook != "null") this.facebook= res.facebook ;
    if(res.twitter != "null") this.twitter= res.twitter ;
    if(res.instagram != "null") this.instagram= res.instagram ;
    if(res.linkedin != "null") this.linkedin= res.linkedin ;
    if(res.linkedin != "null") this.linkedin= res.linkedin ;
    if(res.imagePath != "null") this.imagePath= res.imagePath ;
  }

  DateFormat(date) {
    var mdate=new Date(date);
      
    var dd = mdate.getDate();
    var mm = mdate.getMonth() + 1; 
    var yyyy = mdate.getFullYear();

    if (dd < 10) {
      dd = 0 + dd;
    }
    
    if (mm < 10) {
      mm = 0 + mm;
    }
    
   const currentDate = mm + '/' + dd + '/' + yyyy;
    return currentDate;
  }
}
