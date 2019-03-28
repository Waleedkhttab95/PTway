import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'src/app/my-cv/user.service';
import { DataService } from 'src/app/data.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private _router: Subscription;
  private toggleButton: any;
  private sidebarVisible: boolean;
  mobile_menu_visible: any = 0;
  
  constructor(private router: Router, 
    private element: ElementRef,
     public userService: UserService,
      private dataService: DataService, private authService: AuthService) {
        this.sidebarVisible = false;

       }

  count: Number
  id: any[] = []
  content: any[] = [];
  data: string[][] = []
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;

    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      this.sidebarClose();
    });

    this.userService.getUnreadNotification().subscribe((res: any) => {
      this.count = res.count;
    })

    this.userService.getLastNotification().subscribe((res: any) => {
      for (var i = 0; i < this.count; i++) {
        this.id.push(res.id[i]);
        this.content.push(res.content[i].job_Name);

        this.data.push([
          this.content[i],
          this.id[i]
        ])
      }
    })
  }
  onClick(id: string) {
    this.dataService.storeDataoffer(id);

  }
  logout() {
    this.authService.logOut();
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
};
sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
};
sidebarToggle() {
  const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.wrapper-full-page')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        setTimeout(function() {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function() { //asign a function
          body.classList.remove('nav-open');
          this.mobile_menu_visible = 0;
          $layer.classList.remove('visible');
          this.sidebarClose();
        }.bind(this);

        body.classList.add('nav-open');
    } else {
      document.getElementsByClassName("close-layer")[0].remove();
        this.sidebarClose();
    }
}
}
