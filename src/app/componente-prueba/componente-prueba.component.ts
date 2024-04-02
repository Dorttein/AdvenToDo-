import { Component, Input } from '@angular/core';
import { HijoPruebaComponent } from '../hijo-prueba/hijo-prueba.component';

@Component({
  selector: 'app-componente-prueba',
  standalone: true,
  imports: [HijoPruebaComponent],
  templateUrl: './componente-prueba.component.html',
  styleUrl: './componente-prueba.component.css'
})
export class ComponentePruebaComponent {
  @Input()  apellidos = '';
  username = 'Sergio'
  isLoggedIn = false

  favGame = '';

  getFavorito(juegoFavorito:string){
    this.favGame = juegoFavorito;
  }

  greet(){
    this.isLoggedIn=false;
  }
}
