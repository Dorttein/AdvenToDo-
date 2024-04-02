import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-prueba',
  standalone: true,
  imports: [],
  templateUrl: './hijo-prueba.component.html',
  styleUrl: './hijo-prueba.component.css'
})
export class HijoPruebaComponent {
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
      id: 0,
      nombre: 'Hollow knight'
    },
    {
      id: 1,
      nombre: 'Dark souls'
    }
  ]

  fav(nombreJuego: string){
    // alert('pulsaste en '+ nombreJuego)
    this.addFavoriteEvent.emit(nombreJuego);
  }
}
