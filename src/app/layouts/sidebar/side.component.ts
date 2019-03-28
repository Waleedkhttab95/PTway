import { Component, OnInit, ElementRef } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/my-cv/user.service';


declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}



//Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'لوحة التحكم',
    type: 'link',
    icontype: 'dashboard'
}, {
    path: '/add-project',
    title: 'اضافة مشروع',
    type: 'link',
    icontype: 'next_week'

}, {
    path: '/add-job',
    title: 'اضافة عرض عمل',
    type: 'link',
    icontype: 'rate_review'

}, {
    path: '/candidates-list',
    title: 'قائمة المرشحين',
    type: 'link',
    icontype: 'assignment_ind'

}, {
    path: '/acceptance-list',
    title: 'قائمة المقبولين',
    type: 'link',
    icontype: 'assignment_turned_in'

}, {
    path: '/widgets',
    title: 'تسجيل خروج',
    type: 'link',
    icontype: 'input'

}
];
@Component({
    selector: 'app-sidebar',
    templateUrl: 'side.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SideComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    mobile_menu_visible: any = 0;
    private _router: Subscription;
    count: Number;

    constructor(private router: Router, private element: ElementRef,public userService: UserService,
         public authService: AuthService) {
        this.sidebarVisible = false;
    }
    public menuItems: any[];
    name: string = '';
    imagePath : string;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;

        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          this.sidebarClose();
        });
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        this.userService.getUnreadNotification().subscribe((res: any) => {
            this.count = res.count;
          })
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
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
    logout() {
        this.authService.logOut();
    }
}
