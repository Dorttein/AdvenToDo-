import { Component } from '@angular/core';
import { LateralMenuComponent } from '../lateral-menu/lateral-menu.component';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [LateralMenuComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

}
