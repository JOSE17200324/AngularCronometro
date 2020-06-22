import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   mensaje: string = "";
  
   valor1: number = 0;
   valor2: number = 0;
   valor3: number = 0;

  constructor () {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
  }
  public generarAleatorio(): number {
    return Math.trunc(Math.random() * 6 + 1);
  }
  private generarMensaje(): void {
    if(this.valor1 === this.valor2 && this.valor2 === this.valor3) {
      this.mensaje = 'GANÓ';
    } else { this.mensaje = 'PERDIÓ'; }
  }
  public tirar(): void {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    this.generarMensaje();
  }
}
