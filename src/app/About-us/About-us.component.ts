
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
declare var $: any;



@Component({
  selector: 'app-About-us',
  templateUrl: './About-us.component.html',
  styleUrls: ['./About-us.component.css']
})
export class AboutusComponent implements OnInit, OnDestroy {


  userResetForm: FormGroup;
  isLoading = false;
  private authStatusSub: Subscription;
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  submitted = false;
  returnUrl: string;
  mood: boolean = true;
  notAuth = false;
  signAs: string = "عضو";
  constructor(private element: ElementRef,
    public authService: AuthService, private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;

  }

  test2(btn) {
    // var a = document.getElementById(btn);
    // a.style.color = "#00263E";
    // var x = document.getElementById(p);
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
    // var im = document.getElementById(img);
    // if (im.style.display === "none") {
    //   im.style.display = "block";
    // } else {
    //   im.style.display = "none";
    // }

    // var aes = document.getElementsByTagName("a");
    // var pes = document.getElementsByTagName("p");
    // var ies = document.getElementsByTagName("img");
    
    // for (var i = 0; i < aes.length; i++) {
    //   if (aes[i] == a) {
    //     continue;
    //   }
    //   else {
    //     aes[i].style.color = "white";
    //   }
    // }

    // for (var i = 0; i < pes.length; i++) {
    //   if (pes[i] == x) {
    //     continue;
    //   }
    //   else {
    //     pes[i].style.display = "none";
    //   }
    // }

    // for (var i = 0; i < ies.length; i++) {
    //   if (ies[i] == im || i==0) {
    //     continue;
    //   }
    //   else {
    //     ies[i].style.display = "none";
    //   }
    // }
    var elements = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] == btn) {
        continue;
      }
      else {
        // elements[i].style.display = "none";
      }
    }
    var a = document.getElementById(btn);
    a.style.display = "block";

  }

    ngOnInit() {
      // $('#myTab').on('click', function (e) {
      //   e.preventDefault()
      //   $(this).tab('show');
      //   var a = document.getElementById(this);
      //   a.style.display = "block";
        
      // })

      const isAuth = this.authService.getIsAuth();
      const isCompany = this.authService.getIsCompany();

      if (isAuth && isCompany == 'false') {
        console.log('is user')
        this.router.navigate(['/my-cv']);
      }
      else if (isAuth && isCompany == 'true') {
        console.log('is company')

        this.router.navigate(['/dashboard']);
      }
      else {
        console.log('not auth')

        this.notAuth = true;
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        // this.userMood();
        setTimeout(function () {
          // after 1000 ms we add the class animated to the login/register card
          card.classList.remove('card-hidden');
        }, 700);


        this.userResetForm = this.fb.group({
          email: new FormControl(),
          password: new FormControl()
        });

        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
          authStatus => {
            this.isLoading = false;
          }
        );
      }

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
      if (this.notAuth) this.authStatusSub.unsubscribe();
    }

    companyMood(){
      this.mood = false;
      this.signAs = "شركة";
      let activeLink = document.getElementById('userMood');
      let link = document.getElementById('companyMood');
      link.className = 'fake-link';
      activeLink.className = 'fake-link2';
    }
    userMood(){
      this.mood = true;
      this.signAs = "عضو";
      let activeLink = document.getElementById('companyMood');
      let link = document.getElementById('userMood');
      link.className = 'fake-link';
      activeLink.className = 'fake-link2';
    }

  }
