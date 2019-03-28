import { Component, OnInit } from '@angular/core';
import { JobService } from '../add-job/job.service';
import { DataService } from '../data.service';
import { UserService } from '../my-cv/user.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent implements OnInit {

  constructor(public jobService:JobService,private dataService: DataService, public userService: UserService) { }

  offerId: string;
  job: Object;
  city: string
  contract: string ;
  country: string ;
  gender: string ;
  job_Name: string ;
  public_Major: string ;
  salary: string ;
  startDate: string;
  work_days: string ;
  work_hours: string ;
  ngOnInit() {
     this.offerId = this.dataService.getStoreDataOffer()
    this.getJobOffer(this.offerId);
  }

  getJobOffer(id:string) {
  
    this.jobService.getJob(id).subscribe((res:any) =>{
    

        this.city= res.City,
        this.contract= res.Contract,
        this.country= res.Country,
        this.gender= res.job.gender,
        this.job_Name= res.job.job_Name,
        this.public_Major= res.public_Major,
        this.salary= res.job.salary,
        this.startDate= this.DateFormat(res.job.startDate),
        this.work_days= res.job.work_days,
        this.work_hours= res.job.work_hours
      
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


  onApply() {
    this.jobService.applyJob(this.offerId);
  }
}
