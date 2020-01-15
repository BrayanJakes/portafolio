import { Injectable } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {


  menuAbierto = true;


  constructor(breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.XLarge,
    Breakpoints.Large,
    Breakpoints.Small,
    Breakpoints.Medium
    ]).subscribe(diseno => {
    this.verificarDiseno(diseno);
    });
    }


    verificarDiseno(diseno: BreakpointState) {
      if (diseno.breakpoints[Breakpoints.XSmall]) {
        this.menuAbierto = false;
      }

      if (diseno.breakpoints[Breakpoints.Small]) {
        this.menuAbierto = true;
      }
      if (diseno.breakpoints[Breakpoints.Medium]) {
        this.menuAbierto = true;
      }

      if (diseno.breakpoints[Breakpoints.Large]) {
        this.menuAbierto = true;
      }

      if (diseno.breakpoints[Breakpoints.XLarge]) {
        this.menuAbierto = true;
      }

    }
}
