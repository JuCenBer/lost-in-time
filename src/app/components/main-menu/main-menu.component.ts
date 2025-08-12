import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountdownComponent } from "../countdown/countdown.component";

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
  animations: [
    trigger('zoomModal', [
      transition(':enter', [
        style({ transform: 'scale(0.2)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'scale(0.2)', opacity: 0 }))
      ])
    ])
  ]
})
export class MainMenuComponent {  
  items = [1, 2, 3, 4];

  input: String[] = ['','','',''];

  modalAbierto: number | null = null;

  abrirModal(index: number) {
    this.modalAbierto = index;
  }

  cerrarModal() {
    this.modalAbierto = null;
  }

  
}
