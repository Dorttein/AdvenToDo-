import { Component } from '@angular/core';
import { FichaTareaComponent } from "../ficha-tarea/ficha-tarea.component";

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [FichaTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  fichas = [
    { title: 'Fecha Cumpeaños', fecha: '18/02/2002' },
    { title: 'Felicitar Juan', fecha: '18/02/2002' },
    { title: 'Otra tarea', fecha: '18/02/2002' },
    { title: 'Otra tarea', fecha: '18/02/2002' }
  ];
}
