import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-load-list-dialog',
  templateUrl: './load-list-dialog.component.html',
  styleUrls: ['./load-list-dialog.component.scss']
})
export class LoadListDialogComponent {

  codice: string = "";

  constructor(
    private fb: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<LoadListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) codice: string) {

  }

  listForm = this.fb.group({
    codice: "",
  })

  close() {
    this.dialogRef.close(false);
  }

  save() {
    this.dialogRef.close(
      this.listForm.value.codice);
  }
}