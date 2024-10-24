import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SaludoComponent} from '../componentes/saludo/saludo.component';
import {ContadorComponent} from '../componentes/contador/contador.component';
import {ListaTareasComponent} from '../componentes/lista-tareas/lista-tareas.component';
import {TemporizadorComponent} from '../componentes/temporizador/temporizador.component';
import {ComentarioComponent} from '../componentes/comentario/comentario.component';
import {NgForOf} from '@angular/common';
import {TarjetaProductoComponent} from '../componentes/tarjeta-producto/tarjeta-producto.component';
import {CalculadoraComponent} from '../componentes/calculadora/calculadora.component';
import {ProductoComponent} from '../componentes/producto/producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, ContadorComponent, ListaTareasComponent, TemporizadorComponent, ComentarioComponent, NgForOf, TarjetaProductoComponent, CalculadoraComponent, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica';
  nombre: string = 'juan';
  comentarios: string[] = [];
  nombreProducto:string ='ps5';
  descripcion:string = "muy bonita";
  precio:number = 500;

  agregarComentario(comentario: string) {
    this.comentarios.push(comentario);
  }
}


