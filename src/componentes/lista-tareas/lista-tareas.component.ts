import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  tareas:Array<string> = [];
  agregaTarea(){
    const tar = document.getElementById("tarea") as HTMLInputElement;
    if (tar) {
      const t1 = tar.value;
      if (t1.trim()){
        this.tareas.push(t1.trim());
      }
      tar.value = "";
    }
  }
}
