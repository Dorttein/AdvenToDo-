import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@Component({ //Afecta a las clases de debajo.
	selector: 'app-root', // Etiqueta que va a usar el componente en el index.html
	standalone: true, // Si queremos usar componentes tendremos que importarlos por estar en true
	imports: [RouterOutlet, ToDoComponent, LateralMenuComponent], //Hace falta importar los nuevos componentes que queramos usar
	templateUrl: './app.component.html', //Lo que renderiza
	/* Alternativa no siempre recomendable pero puede venir bien en algunos casos:
		template: `
			<h1>hola mundo</h1>
		`,
	*/
	styleUrl: './app.component.css' // Estilos para renderizar
})
export class AppComponent {
  title = 'primeraPruebaAngular';
  ciudad = 'Segovia'; //Se puede acceder a esto desde el componente (template) con el formato {{ ciudad }}
}
