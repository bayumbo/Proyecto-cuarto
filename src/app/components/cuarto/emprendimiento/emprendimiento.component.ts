import { Component } from '@angular/core';

@Component({
  selector: 'app-emprendimiento',
  templateUrl: './emprendimiento.component.html',
  styleUrls: ['./emprendimiento.component.css']
})
export class EmprendimientoComponent {
  public contador64:number =0;
  public counter64(){
    this.contador64++;
  }
  public contador65:number =0;
  public counter65(){
    this.contador65++;
  }
  public contador66:number =0;
  public counter66(){
    this.contador66++;
  }
  public contador67:number =0;
  public counter67(){
    this.contador67++;
  }
}
