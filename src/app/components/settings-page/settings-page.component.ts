import { Component, OnInit, DoCheck } from '@angular/core';

import { SettingManagerService } from 'src/app/services/setting-manager.service';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
    
    fontSizes !: {fontSizeText: number, fontSizeTitle: number};
    lingue !: string[];
    temi !: string[];

    indiceLinguaAttiva !: {index: number};
    indiceTemaAttivo   !: {index: number};

    comandoVocaleAttivo: boolean = false;
    parolaOrdine: string = 'Lista';
    richiestaConfermaAttiva: boolean = false;

    constructor(private settingsService: SettingManagerService) { }

    ngOnInit(): void {
        
        this.fontSizes = this.settingsService.fontSizes;
        this.lingue = this.settingsService.lingue;
        this.temi = this.settingsService.temi;
        this.indiceLinguaAttiva = this.settingsService.linguaSelezionata;
        this.indiceTemaAttivo = this.settingsService.temaSelezionato;
    }

    updateCarattere() {

        if(this.fontSizes.fontSizeText > 32) this.fontSizes.fontSizeText = 32;
        else if(this.fontSizes.fontSizeText < 8) this.fontSizes.fontSizeText = 8;

        this.fontSizes.fontSizeTitle = this.fontSizes.fontSizeText * 2.5;
    }

    doSomethingImportant() {}
}
