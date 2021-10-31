import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  // variable para guarda el contador
  public numero;

  constructor() { 
    this.numero = 0; 
  }

  // esta varaible se activa al dar click en el boton. se usa para sumar 1 a la variable contador
  public clickMe(){
    this.numero = this.numero + 1;
  }

}
