import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-send-list-code-dialog',
  templateUrl: './send-list-code-dialog.component.html',
  styleUrls: ['./send-list-code-dialog.component.scss']
})
export class SendListCodeDialogComponent {

  codice: string = "";

  constructor(
    private fb: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<SendListCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) codice: string) {

  }

  listForm = this.fb.group({
    codice: "",
  })

  close() {
    this.dialogRef.close(false);
  }
}