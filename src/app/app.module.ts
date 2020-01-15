import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatTooltipModule, MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule

} from '@angular/material';
import { ModalImgComponent } from './components/modal-img/modal-img.component';
import { ImgGrandeComponent } from './components/img-grande/img-grande.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalImgComponent,
    ImgGrandeComponent
  ],
  entryComponents: [ModalImgComponent, ImgGrandeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
