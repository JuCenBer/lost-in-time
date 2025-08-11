import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor() { }

  private iniciarMusica$ = new Subject<void>();

  iniciarMusicaObservable = this.iniciarMusica$.asObservable();

  ejecutarIniciarMusica() {
    this.iniciarMusica$.next();
  }
}
