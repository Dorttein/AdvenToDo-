import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component'; //Aquí tambien es necesario importarlo, pero lo hace automatico

@Component({ //Afecta a las clases de debajo.
	selector: 'app-root', // Etiqueta que va a usar el componente en el index.html
	standalone: true, // Si queremos usar componentes tendremos que importarlos por estar en true
	imports: [RouterOutlet, ComponentePruebaComponent], //Hace falta importar los nuevos componentes que queramos usar
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
