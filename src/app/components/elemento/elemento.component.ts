import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
    selector: 'app-elemento',
    templateUrl: './elemento.component.html',
    styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {

    @Input() id : any = 0;
    lista !: Lista;
    
    constructor(private listManager : ListManagerService) { }
    ngOnInit(): void {
        
        this.lista = this.listManager.getCurrentList();
    }

    deleteElement() {
        this.listManager.removeElement(this.id);
    }
}
