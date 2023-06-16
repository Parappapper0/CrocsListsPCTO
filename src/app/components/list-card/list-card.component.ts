import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Elemento } from 'src/app/models/elemento';
import { Lista } from 'src/app/models/lista';
import { ListManagerService } from 'src/app/services/list-manager.service';
import { SendListCodeDialogComponent } from '../send-list-code-dialog/send-list-code-dialog.component';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

    @Input() index: any = 0;
    liste !: Lista[];

    constructor(private listManager : ListManagerService, private dialog : MatDialog) { }
    ngOnInit(): void {
        
        this.liste = this.listManager.lists;
    }
    share() {

        let codiceLista : string = "";
        let lista = this.liste[this.index];

        codiceLista += lista.titolo.length + "T" + lista.titolo; //lunghezza titolo + T + titolo
        codiceLista += Number(lista.shouldReorder); //riordinare come 1 o 0
        codiceLista += lista.elementi.length + "E"; //numero elementi + E

        lista.elementi.forEach(element => {
            
            let codiceElemento : string = "";

            codiceElemento += element.valore.length + "V" + element.valore; //lunghezza valore + V + valore
            codiceElemento += Number(element.checked); //segnato come 1 o 0
            codiceElemento += element.descri.length + "D" + element.descri; //lunghezza descrizione + D + descrizione

            codiceLista += codiceElemento;
        });

        this.openDialog(codiceLista);
    }

    openDialog(code : string): void {
        const dialogNewList = new MatDialogConfig();
    
        dialogNewList.data = {
          codice: "prova"
        }
        
        
        const dial = this.dialog.open(SendListCodeDialogComponent, dialogNewList);
        dial.componentInstance.codice = code;
      }

    removeList() {

        this.listManager.removeList(this.index);
    }

    openList() {

        this.listManager.openList(this.index);
    }

    getToString() {
        let str = this.listManager.elementiToString(this.index);
        return str == "" ? "Lista vuota, clicka per aprirla e aggiungere qualcosa" : str;
    }
}
