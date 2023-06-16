import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SettingManagerService {


    public fontSizes = {fontSizeText: 16, fontSizeTitle: 40};
    public lingue : string[] = ["Italiano"];
    public temi   : string[] = ["Default"];

    constructor() { }

}
