import { Component } from '@angular/core';

@Component({
  selector: 'app-base-datos-relacional',
  templateUrl: './base-datos-relacional.component.html',
  styleUrls: ['./base-datos-relacional.component.css']
})
export class BaseDatosRelacionalComponent {
  public contador24:number =0;
  public counter24(){
    this.contador24++;
  }
  public contador25:number =0;
  public counter25(){
    this.contador25++;
  }
}
