import { Component, ViewChild,  } from '@angular/core';
import { CountdownComponent } from "../countdown/countdown.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-hint',
  standalone: true,
  imports: [CountdownComponent, CommonModule],
  templateUrl: './last-hint.component.html',
  styleUrl: './last-hint.component.scss'
})
export class LastHintComponent {
  @ViewChild(CountdownComponent) countdownComponent!: CountdownComponent;

  fechaObjetivo = new Date('2025-09-21T00:00:00'); 

  public diferencia(){
    const ahora = new Date();
    return this.fechaObjetivo.getTime() - ahora.getTime()
  }
}