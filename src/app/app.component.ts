import { Component } from '@angular/core';
import { Hora } from './IHora';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hora: number;
  minuto: number;
  segundo: number;

  totalSegundo: number;

  constructor() {
    this.hora = 0;
    this.minuto = 0;
    this.segundo = 0;
  }
  informar(t: Hora): void {
    this.segundo++;
    this.hora = Math.trunc(this.minuto / 60);
    this.minuto = Math.trunc(this.segundo / 60);
  }
}
