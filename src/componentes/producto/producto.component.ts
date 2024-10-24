import { Component } from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf} from '@angular/common';

interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgClass
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})

export class ProductoComponent {
  producto1:Producto={
    nombre:"ps5",
    precio:500,
    cantidad:0,
  }
  producto2:Producto={
    nombre:"ps5pro",
    precio:1000,
    cantidad:0,
  }
  productos:Producto[] = [this.producto1,this.producto2];

  tot:number = 0;

  agregarProducto(producto:Producto){
    producto.cantidad++;
    this.total()
  }

  quitarProducto(producto:Producto){
    if (producto.cantidad>0){
      producto.cantidad--;
      this.total()
    }
  }

  total() {
    let total:number=0;
    for (let prod of this.productos){
      total+=prod.precio*prod.cantidad;
    }
    this.tot = total;
  }
}
