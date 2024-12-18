import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ficha-tarea-base',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ficha-tarea-base.component.html',
  styleUrl: './ficha-tarea-base.component.css'
})
export class FichaTareaBaseComponent {
  uniqueId: number = 0;
  puntos: number = 0;
  title: string = '';
  fecha: string = '18/02/2002';


}
