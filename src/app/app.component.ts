import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalImgComponent } from './components/modal-img/modal-img.component';
import { ResponsiveService } from './services/responsive.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  animaciones = false;
  iconoMenu = false;

  constructor(public dialog: MatDialog,
              public responsive: ResponsiveService) {

              }


  ngOnInit() {
    setTimeout(() => {
      this.animaciones = true;
    }, 2600);

    setTimeout(() => {
      this.iconoMenu = true;
    }, 4500);
  }

  abrirModal(nombre): void {


    const dialogRef = this.dialog.open( ModalImgComponent , {
      width: !this.responsive.menuAbierto ? '100%' : '600px',
      height: !this.responsive.menuAbierto ? '100%' : null,
      data: {nombre}
    });


  }


}
