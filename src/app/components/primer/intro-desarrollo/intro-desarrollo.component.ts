import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-desarrollo',
  templateUrl: './intro-desarrollo.component.html',
  styleUrls: ['./intro-desarrollo.component.css']
})
export class IntroDesarrolloComponent {
  public contador8:number =0;
  public counter8(){
    this.contador8++;
  }
}
