import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ficha-tarea',
  standalone: true,
  templateUrl: './ficha-tarea.component.html',
  styleUrl: './ficha-tarea.component.css'
})
export class FichaTareaComponent {
  @Input() uniqueId: number = 0;
  @Input() title: string = '';
  @Input() fecha: string = '';
}
