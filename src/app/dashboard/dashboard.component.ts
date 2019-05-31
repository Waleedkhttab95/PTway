import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';

import * as Chartist from 'chartist';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    isLoading = false;
  projects: Number = 0;
  jobs: Number = 0;
  accepted: Number = 0;
   constructor(private dashboardService: DashboardService,private router: Router) { }
  public ngOnInit() {
      this.isLoading = true;
      this.dashboardService.getCompanyInfo().subscribe((res:any) =>{
        if(res.status == false) {
            this.router.navigate(['/add-company-info']);

          }
          else{
            this.dashboardService.getCounts().subscribe((result:any) =>{
                this.projects = result.projects;
                this.jobs = result.jobs;
                this.accepted = result.acceptes;
                this.isLoading = false
               })
          
          }
      })
    

   }
   ngAfterViewInit() {
       const breakCards = true;
       if (breakCards === true) {
           // We break the cards headers if there is too much stress on them :-)
           $('[data-header-animation="true"]').each(function(){
               const $fix_button = $(this);
               const $card = $(this).parent('.card');
               $card.find('.fix-broken-card').click(function(){
                   const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                   $header.removeClass('hinge').addClass('fadeInDown');

                   $card.attr('data-count', 0);

                   setTimeout(function(){
                       $header.removeClass('fadeInDown animate');
                   }, 480);
               });

               $card.mouseenter(function(){
                   const $this = $(this);
                   const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                   $this.attr('data-count', hover_count);
                   if (hover_count >= 20) {
                       $(this).children('.card-header, .card-image').addClass('hinge animated');
                   }
               });
           });
       }
   }
}
