import { Component } from '@angular/core';

@Component({
  selector: 'app-arquitectura-software',
  templateUrl: './arquitectura-software.component.html',
  styleUrls: ['./arquitectura-software.component.css']
})
export class ArquitecturaSoftwareComponent {
  public contador80:number =0;
  public counter80(){
    this.contador80++;
  }
  public contador81:number =0;
  public counter81(){
    this.contador81++;
  }
  public contador82:number =0;
  public counter82(){
    this.contador82++;
  }
  public contador83:number =0;
  public counter83(){
    this.contador83++;
  }
}
