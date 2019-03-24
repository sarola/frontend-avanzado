/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import {AlertService} from './alert.service';



@Component({
  selector: 'alert',
  template: `
<div *ngIf="message" [ngClass]="{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }">{{message.text}}</div>
    <div *ngIf='message'> ola</div>
    <div>prueba</div>
  `
})
export class AlertComponent {
  

  //constructor(public data:any) /*  public dialogRef: MatDialogRef<AppComfirmComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: any */
  //{}
 private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
            console.log("Mensaje: " + message);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
