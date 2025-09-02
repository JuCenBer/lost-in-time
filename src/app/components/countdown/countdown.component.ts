import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0

  private intervalo: any;
  @Input() fechaObjetivo!: Date; // Fecha destino

  ngOnInit() {
    this.actualizarTiempo();
    this.intervalo = setInterval(() => this.actualizarTiempo(), 1000); // actualiza cada minuto
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  private actualizarTiempo() {
    const ahora = new Date();
    const diferencia = this.fechaObjetivo.getTime() - ahora.getTime();

    if (diferencia <= 0) {
      this.dias = this.horas = this.minutos = 0;
      clearInterval(this.intervalo);
      return;
    }

    this.dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    this.horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    this.minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    this.segundos = Math.floor((diferencia / 1000) % 60);
  }
}