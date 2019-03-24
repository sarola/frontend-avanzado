/* import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material'; */
import { Injectable } from '@angular/core';

import { AlertComponent } from './alert.component';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';


interface ConfirmData {
  title?: string;
  message?: string;
}

@Injectable()
export class AlertService {
  

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
      console.log("alertServiceError");
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }

    getMessage(): Observable<any> {
      console.log("alertService: " );
        return this.subject.asObservable();
    }
  
  public confirm(data: ConfirmData = {}) /*:  Observable<boolean> */ {
    /*  data.title = data.title || 'Confirm';
    data.message = data.message || 'Are you sure?';
    let dialogRef: MatDialogRef<AppComfirmComponent>;
    dialogRef = this.dialog.open(AppComfirmComponent, {
      width: '380px',
      disableClose: true,
      data: { title: data.title, message: data.message }
    });
    return dialogRef.afterClosed(); */
  }
}
