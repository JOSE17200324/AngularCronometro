import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hora } from '../IHora';
@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  horaActual: Hora = {
    hora: 0,
    minuto: 0,
    segundo: 0
  };

  @Output() reloj = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.horaActual.segundo++;
      if(this.horaActual.segundo === 60) {
        this.horaActual.minuto++;
        this.horaActual.segundo = 0;
        if(this.horaActual.minuto === 60) {
          this.horaActual.hora++;
          this.horaActual.minuto = 0;
        }
      }
      this.reloj.emit(this.horaActual);
    }, 1000);
  }
}

