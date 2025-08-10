import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pixel {
  left: number;
  top: number;
}

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu-button.component.html',
  styleUrl: './main-menu-button.component.scss'
})
export class MainMenuButtonComponent {

  desvaneciendo = false;


pixels: Pixel[] = [];
  numPixels = 100;
  radio = 60;
  pixelSize = 4;
  containerSize = 200;

  ngOnInit(): void {
    this.generarCuadraditos();
  }

  generarCuadraditos(): void {
    const centerX = this.containerSize / 2;
    const centerY = this.containerSize / 2;

    for (let i = 0; i < this.numPixels; i++) {
      const angle = (i / this.numPixels) * 2 * Math.PI;
      const x = Math.round(centerX + this.radio * Math.cos(angle) - this.pixelSize / 2);
      const y = Math.round(centerY + this.radio * Math.sin(angle) - this.pixelSize / 2);
      this.pixels.push({ left: x, top: y });
    }
  }

  @ViewChild('ripple') ripple!: ElementRef<HTMLSpanElement>;

  iniciarEfecto(){
    this.dispararRipple();
    this.iniciarDesvanecimiento();
  }

  dispararRipple() {
    const rippleEl = this.ripple.nativeElement;
    rippleEl.classList.remove('active'); // reinicia animación
    void rippleEl.offsetWidth; // fuerza reflow
    rippleEl.classList.add('active');
    this.iniciarDesvanecimiento();
  }

  iniciarDesvanecimiento() {
    this.desvaneciendo = true;
    setTimeout(() => {
      // Aquí podés redirigir o cambiar de vista
      console.log('Pantalla oculta, ahora cargamos el juego');
    }, 1000); // mismo tiempo que la transición
  }
}
