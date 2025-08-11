import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicComponent } from './components/music-component/music-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild(MusicComponent) musicComponent!: MusicComponent;

  title = 'lost-in-time';
}
