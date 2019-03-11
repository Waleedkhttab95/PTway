import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'src/app/my-cv/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private _router: Subscription;

  constructor(private router: Router, private element: ElementRef, public userService: UserService) {}
  
  count: Number
  id: any[]
  content: any[]
  ngOnInit() {

    this.userService.getUnreadNotification().subscribe((res:any) =>{
      console.log(res);
      this.count = res.count;
    })

    this.userService.getLastNotification().subscribe((res:any) =>{
      for(var i =0 ; i < 5;i++){
        this.id[i].push(res.id[i]._id);
        this.content[i].push(res.content[i].job_Name);
      }
    })
  }

  onClick(id: string) {

  }
}
