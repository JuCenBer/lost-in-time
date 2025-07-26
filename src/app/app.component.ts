import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicComponentComponent } from './components/music-component/music-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild(MusicComponentComponent) musicComponent!: MusicComponentComponent;

  title = 'lost-in-time';
}
