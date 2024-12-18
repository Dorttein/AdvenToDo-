import { Component } from '@angular/core';
import { LateralMenuComponent } from '../lateral-menu/lateral-menu.component';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";
import { ListaTareasComponent } from "../lista-tareas/lista-tareas.component";
import { FichaTareaBaseComponent } from "../ficha-tarea-base/ficha-tarea-base.component";

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [LateralMenuComponent, BarraSuperiorComponent, ListaTareasComponent, FichaTareaBaseComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

}
