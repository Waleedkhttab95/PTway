import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'src/app/my-cv/user.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private _router: Subscription;

  constructor(private router: Router, private element: ElementRef, public userService: UserService,private dataService: DataService) {}
  
  count: Number
  id: any[] = []
  content: any[] = [];
  data: string[][]= []
  ngOnInit() {

    this.userService.getUnreadNotification().subscribe((res:any) =>{
      console.log(res);
      this.count = res.count;
    })

    this.userService.getLastNotification().subscribe((res:any) =>{
      for(var i =0 ; i < this.count;i++){
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
    this.dataService.changeMessage(id);
  }
}
