import { Component, OnInit } from '@angular/core';
import { UserService } from '../my-cv/user.service';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-cv-temp',
  templateUrl: './cv-temp.component.html',
  styleUrls: ['./cv-temp.component.css']
})
export class cv_tempComponent implements OnInit {

  country: string = "";
  study_degree : string = "";
  fullName:  string = "";
  education_degree:  string = "";
  gender:  string = "";
  mobile:  string = "";
  birthDate:  string = "";
  city:  string = "";
  universty: string = "";
  nationalty:  string = "";
  gpa: string="";
  public_Major:  string = "";
  spMajor:  string = "";
  languages:  string = "";
  skills:  string = "";
  email: string = "";
  skill1 : string = "";
  skill2 : string = "";
  skill3 : string = "";
  skill4 : string = "";
  course1 : string ="";
  course2 : string ="";
  course3 : string ="";
  course4 : string ="";
  work1: string = "";
  workname1: string = "";
  date_work1: string = "" ;

  work2: string = "";
  workname2: string = "";
  date_work2: string = "";
  work3: string = "";
  workname3: string = "";
  date_work3: string = "";

  constructor(public userService: UserService, public authService: AuthService, public dataService: DataService) { }

  ngOnInit() {

     // to get user info
     this.userService.get_temp_cv(this.dataService.getStoreDataUser()).subscribe((res: any) =>{
       console.log(res);
      // the same syntax res. 
      this.handling(res.info);
        
      this.fullName=  res.info.fullName;
      this.gender=  res.info.gender;
      this.mobile=  res.info.mobile;
      this.email= res.info.email;
      this.birthDate=  this.DateFormat(res.info.birthDate);
      this.city=  res.info.city;
      this.universty= res.info.universty;
      this.public_Major=  res.info.major;
     this.gpa =  this.getYear(res.info.gpa);
      this.work1 = res.exp.expName;
      this.workname1 = res.exp.from;
      this.date_work1 = this.getYear(res.exp.date);
      this.work2 = res.exp.expName2;
      this.workname2 = res.exp.from2;
      this.date_work2 = this.getYear(res.exp.date2);
      this.work3 = res.exp.expName3;
      this.workname3 = res.exp.from3;
      this.date_work3 = this.getYear(res.exp.date3);

   
  })

  }


  
  handling(res) {

    if(res.nationalty == "non-saudi") this.nationalty = "غير سعودي";
    if(res.nationalty == "saudi") this.nationalty = " سعودي";

    if(res.study_degree == 'HS') this.education_degree = "الثانوية العامة";
    else if(res.study_degree == 'BHO') this.education_degree = "البكالوريوس";
    else if(res.study_degree == 'MASTER') this.education_degree = "الماستر";
    else if(res.study_degree == 'diploma') this.education_degree = "دبلوم";
    else if(res.study_degree == 'Undergraduate') this.education_degree = "خريج";

  

    if(res.skills[0] != "null") this.skill1= res.skills[0] ;
    if(res.skills[1] != "null") this.skill2= res.skills[1] ;
    if(res.skills[2] != "null") this.skill3= res.skills[2] ;
    if(res.skills[3] != "null") this.skill4= res.skills[3] ;

    if(res.courses[0] != "null") this.course1= res.courses[0] ;
    if(res.courses[1] != "null") this.course2= res.courses[1] ;
    if(res.courses[2] != "null") this.course3= res.courses[2] ;
    if(res.courses[3] != "null") this.course4= res.courses[3] ;

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

  getYear(date) {
    if(date != null){
      var mdate=new Date(date);
   
      var yyyy = mdate.getFullYear();
  
   const year = yyyy.toString();
      return year;
    }
  
    return "";
  }
}
