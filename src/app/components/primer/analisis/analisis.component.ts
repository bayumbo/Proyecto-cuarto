import { Component } from '@angular/core';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent {
  public value:number =0;
public counter(){
  this.value++;
}
public contador:number =0;
public counter1(){
  this.contador++;
}
public contador2:number =0;
public counter2(){
  this.contador2++;
}
public contador3:number =0;
public counter3(){
  this.contador3++;
}
}
