import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment'
import { map, catchError, tap } from 'rxjs/operators';


const BackUrl = environment.BackUrl;
//const BackUrl = 'http://localhost:5000/api'

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    addUserInfo(data: any) {
        const postData = new FormData();
        postData.append ('country',data.country);
        postData.append ('study_degree',data.study_degree);
        postData.append ('fullName',data.fullName);
        postData.append ('education_degree',data.education_degree);
        postData.append ('gender',data.gender);
        postData.append ('mobile',data.mobile);
        postData.append ('birthDate',data.birthDate);
        postData.append ('city',data.city);
        postData.append ('universty',data.universty);
        postData.append ('Education_level',data.Education_level);
        postData.append ('public_Major',data.public_Major);
        postData.append ('spMajor',data.spMajor);
        postData.append ('languages',data.languages);
        postData.append ('skills',data.skills);
        postData.append ('personal_Skills',data.personal_Skills);
        postData.append ('hoppies',data.hoppies);
        postData.append ('social_Status',data.social_Status);
        postData.append ('about',data.about);
        postData.append ('personal_web',data.personal_web);
        postData.append ('facebook',data.facebook);
        postData.append ('twitter',data.twitter);
        postData.append ('instagram',data.instagram);
        postData.append ('linkedin',data.linkedin);
        postData.append ('image',data.image,data.fullName);


        this.http
            .post(BackUrl + '/postuserinfo', postData).subscribe(response => {
                this.router.navigate(['/my-cv']);
            });
    }

    updateUserInfo(data: any) {
        const postData = new FormData();
        postData.append ('country',data.country);
        // postData.append ('study_degree',data.study_degree);
        // postData.append ('fullName',data.fullName);
        // postData.append ('education_degree',data.education_degree);
        // postData.append ('gender',data.gender);
         postData.append ('mobile',data.mobile);
        // postData.append ('birthDate',data.birthDate);
        // postData.append ('city',data.city);
        // postData.append ('universty',data.universty);
        // postData.append ('Education_level',data.Education_level);
        // postData.append ('public_Major',data.public_Major);
        // postData.append ('spMajor',data.spMajor);
        // postData.append ('languages',data.languages);
        // postData.append ('skills',data.skills);
        // postData.append ('personal_Skills',data.personal_Skills);
        // postData.append ('hoppies',data.hoppies);
        // postData.append ('social_Status',data.social_Status);
        // postData.append ('about',data.about);
        // postData.append ('personal_web',data.personal_web);
        // postData.append ('facebook',data.facebook);
        // postData.append ('twitter',data.twitter);
     //   postData.append ('instagram',data.instagram);
       // postData.append ('linkedin',data.linkedin);
     //   postData.append ('imagePath',data.image,data.fullName);



        this.http
            .put(BackUrl + '/put/userinfo', postData).subscribe(response => {
                this.router.navigate(['/my-cv']);
            });
    }
    getUserInfo() {
        return this.http
            .get(BackUrl + '/getuserinfo');
    }

    getUserInfoById(id) {
        return this.http
            .get(BackUrl + '/get/userinfo?id='+ id);
    }

    //navbar component
    //sidebar component


    getUser() {
        return this.http
            .get(BackUrl + '/currentuser');
    }

    getUnreadNotification() {
        return this.http
            .get(BackUrl + '/get/unread/notification');
    }

    getLastNotification() {
        return this.http
            .get(BackUrl + '/get/lastnotifcation');
    }

    getAllNotification() {
        return this.http
            .get(BackUrl + '/get/notifications');
    }

    getSpicificNotification(id: string) {
        return this.http
            .get(BackUrl + '/get/notification?notiId=' + id);
    }
    getcity(): Observable<any> {
        return this.http.get(BackUrl + '/getcity').pipe(
            map(this.extractData));
    }
    getcountry(): Observable<any> {
        return this.http.get(BackUrl + '/getcountry').pipe(
            map(this.extractData));
    }
    getmajors(): Observable<any> {
        return this.http.get(BackUrl + '/get/majors').pipe(
            map(this.extractData));
    }
    getspMajors(id: string): Observable<any> {
        return this.http.get(BackUrl + '/get/spMajors?id=' + id).pipe(
            map(this.extractData));
    }
    getuniversty(): Observable<any> {
        return this.http.get(BackUrl + '/get/universty').pipe(
            map(this.extractData));
    }
}