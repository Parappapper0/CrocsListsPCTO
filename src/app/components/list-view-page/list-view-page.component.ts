import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.scss']
})
export class ListViewPageComponent implements OnInit {

    lista !: Lista;

    constructor(private listManager : ListManagerService) { }
    ngOnInit(): void {
        
        this.lista = this.listManager.getCurrentList();
    }

    addElement() {
        this.listManager.addElement('');
    }
}
