import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Img } from '../../config/img.interfas';
import { IMG } from '../../config/imgDescripcion';
import { ImgGrandeComponent } from '../img-grande/img-grande.component';
import { ResponsiveService } from '../../services/responsive.service';


@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css']
})
export class ModalImgComponent implements OnInit {

  datos: Img;

  constructor(
    public dialogRef: MatDialogRef<ModalImgComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog,
    public responsive: ResponsiveService
  ) { }

  ngOnInit() {


    const tmp = IMG.filter(d => d.nombre === this.data.nombre);
    this.datos = tmp[0];

  }


  abrirModal(img): void {


    const dialogRef = this.dialog.open(  ImgGrandeComponent  , {
      width: '500',
      height: '500',
      data: {img}
    });


  }

}
