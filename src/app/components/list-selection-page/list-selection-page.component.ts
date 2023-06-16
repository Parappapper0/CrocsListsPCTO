import { Component, OnInit } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';
import { Lista } from 'src/app/models/lista';
import { ListManagerService } from 'src/app/services/list-manager.service';
import { LoadListDialogComponent } from '../load-list-dialog/load-list-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
    selector: 'app-list-selection-page',
    templateUrl: './list-selection-page.component.html',
    styleUrls: ['./list-selection-page.component.scss']
})
export class ListSelectionPageComponent implements OnInit {

    liste !: Lista[]; 

    constructor(private listManager: ListManagerService, private dialog : MatDialog) { }
    ngOnInit(): void {
        
        this.liste = this.listManager.lists;
    }
    
    openDialog(): void {
        const dialogNewList = new MatDialogConfig();
    
        dialogNewList.data = {
          codice: "prova"
        }
    
        const dialog = this.dialog.open(LoadListDialogComponent, dialogNewList);
    
        dialog.afterClosed().subscribe(data => {
            
        console.log(data);
          if (!data)
            return
          this.loadList(data);
        })
      }

    deleteList(i : number) {
        this.listManager.removeList(i);
    }

    createList() {
        this.listManager.addList('Titolo')
    }

    loadList(codice : string) {

        let titolo: string = "";
        let ordinata: boolean = false;
        let elementi: Elemento[] = [];

        let temp: number;

        let code = codice; //copio per sicurezza

        temp = parseInt(code.split('T')[0]); //lunghezza titolo
        code = code.substring(code.split('T')[0].length + 1);

        titolo = code.slice(0, temp);
        code = code.substring(temp);

        ordinata = Boolean(parseInt(code.slice(0, 1)));
        code = code.substring(1);

        temp = parseInt(code.split('E')[0]); //numero elementi
        code = code.substring(code.split('E')[0].length + 1);

        for(let i = 0; i < temp; i++) {

            let elemento : Elemento = new Elemento("");
            let temp2: number;

            temp2 = parseInt(code.split('V')[0]); //lunghezza valore
            code = code.substring(code.split('V')[0].length + 1);

            elemento.valore = code.slice(0, temp2);
            code = code.substring(temp2);

            elemento.checked = Boolean(parseInt(code.slice(0, 1)));
            code = code.substring(1);

            temp2 = parseInt(code.split('D')[0]); //lunghezza descrizione
            code = code.substring(code.split('D')[0].length + 1);

            elemento.descri = code.slice(0, temp2);
            code = code.substring(temp2);

            elementi.push(elemento);
        }

        this.listManager.addList(titolo, ordinata, elementi);
    }
}
