import { Component } from '@angular/core';

@Component({
  selector: 'app-music-component',
  standalone: true,
  imports: [],
  templateUrl: './music-component.component.html',
  styleUrl: './music-component.component.scss'
})
export class MusicComponentComponent {

  audio = new Audio('assets/green-to-blue.mp3');

  ngOnInit() {
    this.audio.loop = true; // Esto hace que se repita automáticamente
    this.audio.play();
  }
}
