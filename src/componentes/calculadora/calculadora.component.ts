import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number|null = null;

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1*this.numero2;
  }

  dividir(){
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = null;
    }
  }

  raizCuadrada() {
    this.resultado = Math.sqrt(this.numero1);
  }


}
