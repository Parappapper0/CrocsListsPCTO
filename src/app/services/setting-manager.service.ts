import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class SettingManagerService {


    public fontSizes = {fontSizeText: 16, fontSizeTitle: 40};
    public lingue : string[] = ["Italiano", "Test"];
    public temi   : string[] = ["Default", "Test"];

    public linguaSelezionata : {index: number} = {index: 0};
    public temaSelezionato : {index: number} = {index: 0};

    constructor() { }

}
