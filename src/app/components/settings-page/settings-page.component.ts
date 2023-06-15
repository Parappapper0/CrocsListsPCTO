import { Component, OnInit } from '@angular/core';
import { SettingManagerService } from 'src/app/services/setting-manager.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  fontSizeInput!: number;

  constructor(private serviceFontSize: SettingManagerService) {}

  ngOnInit(): void {
    this.fontSizeInput = this.serviceFontSize.getFontSizeText();
  }

  applyFontSize(): void {
    this.serviceFontSize.setFontSizeText(this.fontSizeInput);
    this.updateFontSizes();
  }

  updateFontSizes(): void {
    const h1s = document.getElementsByTagName('h1');
    const labels = document.getElementsByTagName('label');

    for (let i = 0; i < labels.length; i++) {
      labels[i].style.fontSize = this.fontSizeInput + 'px';
    }

    for (let i = 0; i < h1s.length; i++) {
      h1s[i].style.fontSize = this.serviceFontSize.applyFontSizes(this.fontSizeInput) + 'px';
    }
  }
}




/*
this.fontSizec.emit(this.fontSize);
@Output() fontSizec = new EventEmitter<number>();
*/
