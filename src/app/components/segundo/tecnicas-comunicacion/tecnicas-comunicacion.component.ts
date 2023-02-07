import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnicas-comunicacion',
  templateUrl: './tecnicas-comunicacion.component.html',
  styleUrls: ['./tecnicas-comunicacion.component.css']
})
export class TecnicasComunicacionComponent {
  public contador36:number =0;
  public counter36(){
    this.contador36++;
  }
  public contador37:number =0;
  public counter37(){
    this.contador37++;
  }
}
