import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AnotherModalComponent } from '../another-modal/another-modal.component';

export interface DialogData {
  summary: string;
  formHeadline: string;
  formItems: string;
}

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent implements OnInit {
  summary?: string;
  formHeadline?: string;
  formItems?: string;

  constructor(
    public anotherDialog: MatDialog,
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAnotherModalOpen(): void {
    const anotherDialogRef = this.anotherDialog.open(AnotherModalComponent, {
      width: '50vw',
    });
  }
}
