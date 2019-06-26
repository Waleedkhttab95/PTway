import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meta } from '@angular/platform-browser';

declare let ga: Function;

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  private _router: Subscription;

  constructor( private router: Router,private meta: Meta ) {

    this.meta.addTags([
      {name: 'title', content: 'Ptway | منصة التوظيف الجزئي'},
      {name: 'description', content: '!باحث عن وظيفة جزئية أو صاحب عمل, سجل في منصتنا'},
      {name: 'author', content: 'Ptway | منصة التوظيف الجزئي'},
// tslint:disable-next-line: max-line-length
      {name: 'keywords',
       content: 'وظيفة جزئية,صيفي,تطوع,وظائف,السعودية,وظيفة كوم,وظائف نسائية,وظائف اليوم,وظائف الرياض,job,riyadh,saudi arabia,part-time,jobs near me,jobs jeddah,jobs,ptway,work,volunter,volunteing,vacancy,vacancies,offers '}
    ]);


       // subscribe to router events and send page views to Google Analytics
       this.router.events.subscribe(event => {

        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
  
        }
  
      });
  }

    ngOnInit() {
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        const body = document.getElementsByTagName('body')[0];
        const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (body.classList.contains('modal-open')) {
          body.classList.remove('modal-open');
          modalBackdrop.remove();
        }
      });
    }
}
