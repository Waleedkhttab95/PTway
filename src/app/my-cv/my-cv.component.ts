import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {

  constructor(public userService: UserService, public authService: AuthService) { }

  ngOnInit() {

    // to get user name
    this.userService.getUser().subscribe((res: any)  =>{
      console.log(res.firstName +' '+ res.lastName)
      // to get user info
      this.userService.getUserInfo().subscribe((res: any) =>{
        console.log(res.about);
        // the same syntax res. 
      })
    })


  }

}
