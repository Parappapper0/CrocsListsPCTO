import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingManagerService {
  private fontSizeText: number = 16;
  private fontSizeTitle: number = 40;

  constructor() {}

  getFontSizeText(): number {
    return this.fontSizeText;
  }

  setFontSizeText(size: number): void {
    this.fontSizeText = size;
  }

  applyFontSizes(nu: number): number {
    let boh: number = 0;
    if (nu == 16) {
      boh = this.fontSizeTitle;
      return boh;
    } else if (nu > 16) {
      let diff = nu - 16;
      boh = this.fontSizeTitle + diff;
      return boh;
    } else if (nu < 16) {
      let diff = 16 - nu;
      boh = this.fontSizeTitle - diff;
      return boh;
    }
    return 2;
  }
}



/*import { Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingManagerService {

  fontSizeText: number=16;
  fontSizeTitle: number=40;
  Text!: number;
  Title!: number;
  constructor() { }

  applyFontSizes(nu: number):number{
    let boh:number=0;
    if (nu == 16) {
      boh = this.fontSizeTitle;
      return boh;
    }
    else if (nu > 16) {
      let diff = nu - 16;
      boh = this.fontSizeTitle + diff;
      return boh;
    }
    else if (nu < 16) {
      let diff = 16 - nu;
      boh = this.fontSizeTitle - diff;
      return boh;
    }
return 2;
  }

}
--------------------
fontSize: number = 16;
  fontsizetit: number = 40;
  @Output() fontSizec = new EventEmitter<number>();

  applyFontSize() {
    let labels = document.getElementsByTagName('label');
    let h1s = document.getElementsByTagName('h1');

    for (let i = 0; i < h1s.length; i++) {
      if (this.fontSize == 16) {
        h1s[i].style.fontSize = this.fontsizetit + 'px';
      } else if (this.fontSize > 16) {
        let diff = this.fontSize - 16;
        h1s[i].style.fontSize = this.fontsizetit + diff + 'px';
      } else if (this.fontSize < 16) {
        let diff = 16 - this.fontSize;
        h1s[i].style.fontSize = this.fontsizetit - diff + 'px';
      }
      this.fontSizec.emit(this.fontSize);
    }

    for (let i = 0; i < labels.length; i++) {
      labels[i].style.fontSize = this.fontSize + 'px';
    }
*/
