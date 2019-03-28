import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class DataService {
    
    private messageSource = new BehaviorSubject<string>('dd');
    currentMessage = this.messageSource.asObservable();
    
    private statusSource = new BehaviorSubject<boolean>(false);
    currentStatus = this.statusSource.asObservable();
    
    private previosData = new BehaviorSubject<string>('')
    currentPreData = this.messageSource.asObservable() ; 

    constructor() {
    
    }

    changeMessage(message: string) {
     this.messageSource.next(message);
    }

    changePreData(data: string) {
      this.previosData.next(data);
    }
    changeStatus(status: boolean) {
      this.statusSource.next(status);
}

public storeData(projectId) {
 localStorage.setItem('projectId',projectId);
}

public storeDataJob(jobId) {
  localStorage.setItem('jobId',jobId);
 }

 public storeDataUser(userId) {
  localStorage.setItem('userId',userId);
 }

 
 public storeDataoffer(offerId) {
  localStorage.setItem('offer',offerId);
 }

public getStoreData() {
  const projectId = localStorage.getItem('projectId')
  if(!projectId) return ;

  return projectId;
}

public getStoreDataOffer() {
  const offer = localStorage.getItem('offer')
  if(!offer) return ;

  return offer;
}

public getStoreDataUser() {
  const user = localStorage.getItem('userId')
  if(!user) return ;

  return user;
}

public getStoreDataJob() {
  const jobId = localStorage.getItem('jobId')
  if(!jobId) return ;

  return jobId;
}
}