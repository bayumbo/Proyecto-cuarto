import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.css']
})
export class FundamentosComponent {
  public contador4:number =0;
  public counter4(){
    this.contador4++;
  }
  public contador5:number =0;
  public counter5(){
    this.contador5++;
  }
  public contador6:number =0;
  public counter6(){
    this.contador6++;
  }
  public contador7:number =0;
  public counter7(){
    this.contador7++;
  }
  public contador100:number =0;
  public counter100(){
    this.contador100++;
  }
}
