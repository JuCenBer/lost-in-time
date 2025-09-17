import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-codigo-secreto',
  templateUrl: './codigo-secreto.component.html',
  styleUrls: ['./codigo-secreto.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CodigoSecretoComponent {

  @Input() letra!: string;
  @Input() codigoValido!: string;

  codigoIngresado: string = '';
  codigoCorrecto: boolean = false;
  desvaneciendo: boolean = false;
  errorActivo: boolean = false;


  validarCodigo() {
    if (this.codigoIngresado.toUpperCase() === this.codigoValido) {
      this.desvaneciendo = true;
      setTimeout(() => {
        this.codigoCorrecto = true;
      }, 800);
    } else {
      this.marcarError();
    }
  }

  private marcarError() {
    this.errorActivo = true;
    setTimeout(() => {
      this.errorActivo = false;
    }, 1000); // vuelve a blanco después de 1s
  }
}