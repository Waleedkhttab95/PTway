import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { AuthService } from '../auth/auth.service';
import { CompanyService } from '../company-profile/company.service';

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
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    constructor(private authService: AuthService, public companyService:CompanyService) { }
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
        this.authService.autoAuthUser();
        this.name = this.authService.getCompanyName()
        this.companyService.getCompanyInfo().subscribe((res:any) =>{
            
            if(res.imagePath == null) this.imagePath = '../../assets/img/default-avatar.png';
            this.imagePath = res.imagePath;
        })
        this.menuItems = ROUTES.filter(menuItem => menuItem);
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
    logout() {
        this.authService.logOut();
    }
}
