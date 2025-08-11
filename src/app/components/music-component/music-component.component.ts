import { Component } from '@angular/core';
import { ComunicationService } from '../../services/comunication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-component',
  standalone: true,
  imports: [],
  templateUrl: './music-component.component.html',
  styleUrl: './music-component.component.scss'
})
export class MusicComponent {

  audio = new Audio('assets/green-to-blue.mp3');
  private sub: Subscription;


  constructor(private comunicacionService: ComunicationService){
    this.sub = this.comunicacionService.iniciarMusicaObservable.subscribe(() => {
      this.playMusic();
    });
  }

  ngOnInit() {
    this.audio.loop = true; // Esto hace que se repita automáticamente
  }

  playMusic() {
    if (this.audio.paused) {
      this.audio.play();
    }
  }
}
