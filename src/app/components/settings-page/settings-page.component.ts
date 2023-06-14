import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  fontSize: number=15;
  applyFontSize() {
    let labels = document.getElementsByTagName("label");
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.fontSize = this.fontSize + "px";
    }
  }
}
