import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import {ProjectData} from './project-data.model';
import {ProjectService} from './project.service';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  isLoading=false;
  form: FormGroup;
  projectData: ProjectData;
  constructor(private data: DataService, public projectService: ProjectService, public authService: AuthService) { }

  status: boolean;
  projectId: string;
  updateData: Object;
  ngOnInit() {
    this.isLoading=true;
    this.form = new FormGroup({
      'title': new FormControl(null ,
         {validators: [Validators.required, Validators.minLength(2)]}),

         'content': new FormControl(null ,
         {validators: [Validators.required]})
          });

          this.data.currentStatus.subscribe(s =>{
            this.status = s;
           })

           this.data.currentMessage.subscribe(m =>{
            this.projectId = m;
           })
           

           if(this.status === true) {
            this.projectService.getproject(this.projectId).subscribe((response) =>{
              this.form.setValue({
              'title' : response.projectName,
              'content'  : response.projectDescription
              } )
            } )
          }
          this.isLoading=false;
  }

  onAddProject() {
    if (this.form.invalid) {
      return;
    }
    

    if(this.status === true) {
     this.updateData = {
       id: this.projectId,
      projectName: this.form.value.title,
      projectDescription: this.form.value.content
     }
      
    
       this.projectService.updateProject( this.updateData);
    }
    else {
      this.projectData = {
        projectName: this.form.value.title,
        projectDescription: this.form.value.content
      }
    
       this.projectService.addproject(this.projectData);
    }
    
  }

}
