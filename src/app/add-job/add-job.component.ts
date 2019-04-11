import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '../company-profile/company.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit, OnDestroy{
  test: Date = new Date();
  isVolunteer= false;
  constructor(public companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanySector().subscribe((res:any) =>{
      console.log(res)
      if(res == "VO") this.isVolunteer = true;
    })
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('pricing-page');
    body.classList.add('off-canvas-sidebar');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('pricing-page');
    body.classList.remove('off-canvas-sidebar');
  }


}
