import { Component } from '@angular/core';
import {Timestamp} from 'rxjs';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  hora: Date = new Date();
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.hora = new Date(Date.now());
    }, 1000);
  }


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  paraTiempo(){
    if (this.intervalId){
      clearInterval(this.intervalId);
    }
  }

}
