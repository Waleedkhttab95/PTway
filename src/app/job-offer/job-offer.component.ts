import { Component, OnInit } from '@angular/core';
import { JobService } from '../add-job/job.service';
import { DataService } from '../data.service';
import { UserService } from '../my-cv/user.service';
import { CompanyService } from '../company-profile/company.service';
import swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent implements OnInit {

  constructor(public jobService:JobService,private dataService: DataService, public userService: UserService,
    public companyService:CompanyService) { }

    isLoading = false;
  offerId: string;
  job: Object;
  apply: boolean;
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
     this.offerId = this.dataService.getStoreDataOffer()
    this.getJobOffer(this.offerId);
  }

  getJobOffer(id:string) {
  
    this.jobService.getJob(id).subscribe((res:any) =>{
     this.apply = res.apply
     if(this.apply == true ) {
       this.showSwal('warning-message')
     }
      this.city= res.City,
      this.contract= res.Contract,
      this.country= res.Country,
      this.gender= res.job.gender,
      this.job_Name= res.job.job_Name,
      this.description= res.job.descreption,
      this.public_Major= res.public_Major,
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


  onApply() {
    this.jobService.applyJob(this.offerId);
  }

  onBack() {
    
  }
  showSwal(type) {
    if (type == 'warning-message') {
      swal({
        title: "لقد تقدمت بالفعل لهذه الوظيفة!",
        text: "شكرا لك , لقد تقدمت لهذه الوظيفة سابقا و نتمنى لك التوفيق !",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning",
        type: "success"
      }).catch(swal.noop)
    }
  }
}
