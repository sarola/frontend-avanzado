import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppSettings } from '../app.settings';
 //import { MatSnackBar } from '@angular/material'; 

@Injectable()
export class NotificationsService {


 private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }

    getMessage(): Observable<any> {
    	
        return this.subject.asObservable();
    }

//  constructor( private snackBar: MatSnackBar ) {}

/*  showNotification(message: string, action: string) {
        this.snackBar.open(message, action, {
      duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
    }); 
  }*/
}
