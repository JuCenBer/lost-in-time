import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountdownComponent } from "../countdown/countdown.component";
import { Puzzle1Component } from '../puzzles/puzzle1/puzzle1.component';
import { Puzzle2Component } from "../puzzles/puzzle2/puzzle2.component";
import { Puzzle3Component } from "../puzzles/puzzle3/puzzle3.component";
import { Puzzle4Component } from "../puzzles/puzzle4/puzzle4.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, Puzzle1Component, Puzzle2Component, Puzzle3Component, Puzzle4Component],
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

  @ViewChild(Puzzle1Component) puzzle1Component!: Puzzle1Component;
  @ViewChild(Puzzle2Component) puzzle2Component!: Puzzle2Component;
  @ViewChild(Puzzle3Component) puzzle3Component!: Puzzle3Component;
  @ViewChild(Puzzle4Component) puzzle4sComponent!: Puzzle4Component;

  items = [1, 2, 3, 4];

  input: String[] = ['','','',''];

  modalAbierto: number | null = null;

  errorCode: boolean = false;

  sucessCode: boolean = false;

  constructor(private router: Router){}

  abrirModal(index: number) {
    this.modalAbierto = index;
  }

  cerrarModal() {
    this.modalAbierto = null;
  }

  onCodeCompleted() {
    var code = this.input.join('');
    if (code.toUpperCase() === 'TIME') {
      this.showSucessCode();
      setTimeout(() => {
        this.router.navigate(['/lastHint']);
      }, 3000);
    }
    else{
      this.showErrorCode()
    }
  }

  showErrorCode() {
    this.errorCode = true;
    setTimeout(() => {
      this.errorCode = false;
    }, 5000);
  }

  showSucessCode() {
    this.sucessCode = true;
  }
}
