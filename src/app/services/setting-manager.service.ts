import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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
