import { Component, OnInit } from '@angular/core';
import { JobService } from '../add-job/job.service';
import { DataService } from '../data.service';
import { UserService } from '../my-cv/user.service';
import { CompanyService } from '../company-profile/company.service';

@Component({
  selector: 'app-job-offer-preview',
  templateUrl: './job-offer-preview.component.html',
  styleUrls: ['./job-offer-preview.component.css']
})
export class JobOfferPreviewComponent implements OnInit {

  constructor(public jobService:JobService,private dataService: DataService, public userService: UserService,
    public companyService:CompanyService) { }

    isLoading = false;
  offerId: string;
  job: Object;
  city: string
  contract: string ;
  country: string ;
  gender: string ;
  job_Name: string ;
  description: string;
  public_Major: string ;
  salary: string ;
  startDate: string;
  work_days: string ;
  work_hours: string ;
  companyName: string;
  companyInfo:string;
  companyImg: string = './assets/img/avatar.png';
  companyWebsite: string;
  companyCountry: string;
  companyCity: string;
  salaryType: string = "شهريا"
  ngOnInit() {
    this.isLoading = true;
     this.offerId = this.dataService.getStoreDataJob();
    this.getJobOffer(this.offerId);
  }

  getJobOffer(id:string) {
  
    this.jobService.getJobPreview(id).subscribe((res:any) =>{
    console.log(res)
      this.city= res.City,
      this.contract= res.Contract,
      this.country= res.Country,
      this.gender= res.job.gender,
      this.job_Name= res.job.job_Name,
      this.description= res.job.descreption,
     // this.public_Major= res.public_Major,
      this.salary= res.job.salary,
      this.startDate= this.DateFormat(res.job.startDate),
      this.work_days= res.job.work_days,
      this.work_hours= res.job.work_hours
      if(res.contractType == 59) this.salaryType = 'يوميا'
      this.companyService.getCompanyInfoById(res.job.company).subscribe((res:any) =>{
        this.companyName = res.compnayName
        this.companyCountry = res.country
        this.companyCity = res.city
        this.companyInfo = res.info
        if(res.imagePath != null) this.companyImg = res.imagePath;
        this.isLoading = false;
      
      })
 
      
    });
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
