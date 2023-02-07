import { Component } from '@angular/core';

@Component({
  selector: 'app-base-datos-no-relacional',
  templateUrl: './base-datos-no-relacional.component.html',
  styleUrls: ['./base-datos-no-relacional.component.css']
})
export class BaseDatosNoRelacionalComponent {
  public contador40:number =0;
  public counter40(){
    this.contador40++;
  }
  public contador41:number =0;
  public counter41(){
    this.contador41++;
  }
  public contador42:number =0;
  public counter42(){
    this.contador42++;
  }
  public contador43:number =0;
  public counter43(){
    this.contador43++;
  }
}
