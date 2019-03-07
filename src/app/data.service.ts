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

    constructor() {}

    changeMessage(message: string) {
            this.messageSource.next(message);
    }

    changeStatus(status: boolean) {
      this.statusSource.next(status);
}
}