import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SignUpService } from './sign-up.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  userRegistrForm: FormGroup;
  firstName = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  Email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  Password = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  agrreTerms = new FormControl('', [
    Validators.required
  ]);


  companyRegistrForm: FormGroup;
  companyName = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.nullValidator,
  ]);
  CompanySpecialist = new FormControl('', [
    Validators.required
  ]);
  sector = new FormControl('', [
    Validators.required
  ]);
  agrreTermsCompany = new FormControl('', [
    Validators.required
  ]);


  matcher = new MyErrorStateMatcher();

  constructor(public rest: SignUpService, public authService: AuthService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  test: Date = new Date();
  isLoading = false;
  private authStatusSub: Subscription;
  selectedValue: string;
  selectTheme = 'primary';
  currentCompanySpecialist: string[];
  CompanySpecialists = [];
  currentSector: string[];
  sectors = [];

  getsectors() {
    this.sectors = [];
    this.rest.getsectors().subscribe((data: {}) => {
      for (let key in data) {
        this.sectors.push({ value: data[key].key, viewValue: data[key].sectorName });
      }
    });
  }

  getspecialization() {
    this.CompanySpecialists = [];
    this.rest.getspecialization().subscribe((data: {}) => {
      for (let key in data) {
        this.CompanySpecialists.push({ value: data[key]._id, viewValue: data[key].specialistName });
      }
    });
  }

  userRegistreing() {
    this.authService.createUser(this.userRegistrForm.value.firstName, this.userRegistrForm.value.lastName,
      this.userRegistrForm.value.email, this.userRegistrForm.value.password);
  }

  companyRegistreing() {
    this.authService.createCompany(this.companyRegistrForm.value.companyName, this.companyRegistrForm.value.email
      , this.companyRegistrForm.value.CompanySpecialist, this.companyRegistrForm.value.sector
      , this.companyRegistrForm.value.password);
  }

  ngOnInit() {
    this.getsectors();
    this.getspecialization();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');

    this.userRegistrForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      agrreTerms: new FormControl('', [
        Validators.required
      ])
    });

    this.companyRegistrForm = this.fb.group({
      companyName: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      CompanySpecialist: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      sector: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      agrreTermsCompany: new FormControl('', [
        Validators.required
      ])
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
