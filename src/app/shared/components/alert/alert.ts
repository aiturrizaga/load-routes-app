import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.scss'
})
export class Alert {
  dialogRef = inject(DialogRef<Alert>);
  data: {title: string, message: string} = inject(DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}
