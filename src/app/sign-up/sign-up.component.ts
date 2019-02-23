import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  userRegistrForm: FormGroup;
  companyRegistrForm: FormGroup;

  constructor(public authService: AuthService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  test: Date = new Date();
  isLoading = false;
  private authStatusSub: Subscription;
  selectedValue: string;
  currentCompanySpecialist: string[];

  selectTheme = 'primary';
  CompanySpecialists = [
    { value: 'التصميم والآبداع', viewValue: 'التصميم والآبداع' },
    { value: 'الهندسة المعمارية', viewValue: 'الهندسة المعمارية' },
    { value: 'امن المعلومات', viewValue: 'امن المعلومات' },
  ];

  currentSector: string[];

  sectors = [
    { value: 'قطاع حكومي', viewValue: 'قطاع حكومي' },
    { value: 'قطاع خاص', viewValue: 'قطاع خاص' },
    { value: 'جمعية خيرية', viewValue: 'جمعية خيرية' },
  ];

  // userRegistreing() {
  //   console.log(this.userRegistrForm.value);
  //   this.authService.createUser(this.userRegistrForm.value).subscribe((result) => {
  //     this.router.navigate(['/forms/userform/']);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  // companyRegistreing() {
  //   this.authService.companyRegistreing(this.companyRegistrForm.value).subscribe((result) => {
  //     this.router.navigate(['/forms/companyform/']);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');

    this.userRegistrForm = this.fb.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });

    this.companyRegistrForm = this.fb.group({
      companyName: new FormControl(),
      email: new FormControl(),
      CompanySpecialist: new FormControl(),
      sector: new FormControl(),
      password: new FormControl()
    });

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
    this.authStatusSub.unsubscribe();

  }

}
