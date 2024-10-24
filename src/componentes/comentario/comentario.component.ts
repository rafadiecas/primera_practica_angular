import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent {
  comentario: string = '';
  @Output() comentarioEnviado = new EventEmitter<string>();

  agregaComentario() {
    if (this.comentario.trim()) {
      this.comentarioEnviado.emit(this.comentario.trim());
      this.comentario = '';
    }
  }
}
