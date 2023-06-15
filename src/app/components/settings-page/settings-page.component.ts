/*import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  fontSize: number=15;
  fontSizediff: number=0;
  fontsizetit: number=60;
  isVoiceCommandActivated: boolean = false;
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
  toggleVoiceCommand() {
    // Aggiorna la visualizzazione delle impostazioni aggiuntive
    // in base allo stato di isVoiceCommandActivated
    if (this.isVoiceCommandActivated) {
      // Mostra le impostazioni aggiuntive
      document.querySelectorAll('.optional-option').forEach((element) => {
        element.classList.remove('hidden');
      });
    } else {
      // Nascondi le impostazioni aggiuntive
      document.querySelectorAll('.optional-option').forEach((element) => {
        element.classList.add('hidden');
      });
    }

}
}
*/
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  fontSize: number = 15;
  fontsizetit: number = 60;
  @Output() fontSizec = new EventEmitter<number>();

  applyFontSize() {
    let labels = document.getElementsByTagName('label');
    let h1s = document.getElementsByTagName('h1');

    for (let i = 0; i < h1s.length; i++) {
      if (this.fontSize == 15) {
        h1s[i].style.fontSize = this.fontsizetit + 'px';
      } else {
        let diff = this.fontSize - 15;
        h1s[i].style.fontSize = this.fontsizetit + diff + 'px';
      }
      this.fontSizec.emit(this.fontSize);
    }

    for (let i = 0; i < labels.length; i++) {
      labels[i].style.fontSize = this.fontSize + 'px';
    }
  }

}
