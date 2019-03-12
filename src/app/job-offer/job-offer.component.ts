import { Component, OnInit } from '@angular/core';
import { JobService } from '../add-job/job.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent implements OnInit {

  constructor(public jobService:JobService,private dataService: DataService) { }

  offerId: string;
  job: Object;
  ngOnInit() {
     this.dataService.currentMessage.subscribe(r =>{
       this.offerId = r;

       this.getJobOffer(this.offerId) ;
     });

  }

  getJobOffer(id:string) {
  
    this.jobService.getJob(id).subscribe((res:any) =>{
    

      this.job = {
        city: res.City,
        contract: res.Contract,
        country: res.Country,
        gender: res.job.gender,
        job_Name: res.job.job_Name,
        public_Major: res.job.public_Major,
        salary: res.job.salary,
        startDate: this.DateFormat(res.job.startDate),
        work_days: res.job.work_days,
        work_hours: res.job.work_hours
      }
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
