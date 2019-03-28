
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
declare var $: any;



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {


  userloginForm: FormGroup;
  isLoading = false;
  private authStatusSub: Subscription;
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  submitted = false;
  returnUrl: string;
  mood: boolean = true;
  signAs: string = "عضو";
  constructor(private element: ElementRef,
    public authService: AuthService, private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;

  }

  userlogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if(this.mood == true){
      this.authService.login(form.value.email, form.value.password);
    }
    else{
      this.authService.companyLogin(form.value.email, form.value.password);
    }
  }

  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
    const card = document.getElementsByClassName('card')[0];
    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      card.classList.remove('card-hidden');
    }, 700);

   
    this.userloginForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    });

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }
  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];
    var sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible == false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
    this.authStatusSub.unsubscribe();
  }

  companyMood(){
    this.mood  = false;
    this.signAs = "شركة";
    let activeLink = document.getElementById('userMood');
    let link = document.getElementById('companyMood');
    activeLink.className = 'fake-link';
    link.classList.remove('fake-link');
  }
  userMood(){
    this.mood  = true;
    this.signAs = "عضو";
    let activeLink = document.getElementById('companyMood');
    let link = document.getElementById('userMood');
    activeLink.className = 'fake-link';
    link.classList.remove('fake-link');
  }

}
