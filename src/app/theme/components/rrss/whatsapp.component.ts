import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class OptionsComponent {

  public openLinkWhatsapp(){
    window.open('https://api.whatsapp.com/send?phone=+56995153417&text=%20Hola, estoy interesad@ en tu producto.');
  }
}