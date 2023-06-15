import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  fontSize: number=15;
  fontSizediff: number=0;
  fontsizetit: number=60;
  @Output() fontSizec = new EventEmitter<number>();
  applyFontSize() {
    let labels = document.getElementsByTagName("label");
    let h1s = document.getElementsByTagName("h1");
    for (let i = 0; i < h1s.length; i++) {
      if (this.fontSize==15){
        h1s[i].style.fontSize = this.fontsizetit + "px";}
        else{
          let diff=this.fontSize-15;
          h1s[i].style.fontSize = this.fontsizetit+ diff + "px";
        }
        this.fontSizec.emit(this.fontSize);
    }
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.fontSize = this.fontSize + "px";
    }
  }
}
