import { Component } from '@angular/core';

@Component({
  selector: 'app-analisis-matematico',
  templateUrl: './analisis-matematico.component.html',
  styleUrls: ['./analisis-matematico.component.css']
})
export class AnalisisMatematicoComponent {
  public contador20:number =0;
  public counter20(){
    this.contador20++;
  }
  public contador21:number =0;
  public counter21(){
    this.contador21++;
  }
}
