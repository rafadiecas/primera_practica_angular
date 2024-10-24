import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {
  @Input() nombre:string = "";
  @Input() descripcion:string = "";
  @Input() pvp:number = 0;

}
