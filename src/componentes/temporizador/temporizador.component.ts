import { Component } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  private intervalId: any;
  contador:number = 0;

  temporizador(){
    const parra = document.getElementById("parrafo") as HTMLElement;
    parra.style.display = "block";
    const tiempo = document.getElementById("cont") as HTMLInputElement;
    this.contador = parseInt(tiempo.value)
    this.intervalId = setInterval(() => {
      if (this.contador === 0){
        clearInterval(this.intervalId);
        parra.style.display = "none";
      }else {
        this.contador--;
      }
    }, 1000);
  }

  paraTiempo(){
    if (this.intervalId){
      clearInterval(this.intervalId);
    }
  }

}
