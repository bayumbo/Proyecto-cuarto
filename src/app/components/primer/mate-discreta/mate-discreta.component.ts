import { Component } from '@angular/core';

@Component({
  selector: 'app-mate-discreta',
  templateUrl: './mate-discreta.component.html',
  styleUrls: ['./mate-discreta.component.css']
})
export class MateDiscretaComponent {
  public contador12:number =0;
  public counter12(){
    this.contador12++;
  }
  public contador13:number =0;
  public counter13(){
    this.contador13++;
  }
}
