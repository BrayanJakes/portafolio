import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-img-grande',
  templateUrl: './img-grande.component.html',
  styleUrls: ['./img-grande.component.css']
})
export class ImgGrandeComponent implements OnInit {

  datos: string;

  constructor(
    public dialogRef: MatDialogRef<ImgGrandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

    ngOnInit() {
      this.datos = this.data.img;
    }

}
