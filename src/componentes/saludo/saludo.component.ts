import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  @Input() nombre:String = "";
}
