import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
    selector: 'app-list-selection-page',
    templateUrl: './list-selection-page.component.html',
    styleUrls: ['./list-selection-page.component.scss']
})
export class ListSelectionPageComponent implements OnInit {

    liste !: Lista[]; 

    constructor(private listManager: ListManagerService) { }
    ngOnInit(): void {
        
        this.liste = this.listManager.lists;
    }
    

    deleteList(i : number) {
        this.listManager.removeList(i);
    }

    createList() {
        this.listManager.addList('Titolo')
    }
}
