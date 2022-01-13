import { Component, Input, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar-item',
  templateUrl: './snackbar-item.component.html',
  styleUrls: ['./snackbar-item.component.css']
})
export class SnackbarItemComponent  {


  constructor(
    public sbRef: MatSnackBarRef<SnackbarItemComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: number
  ) {}



}
