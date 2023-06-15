import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';
import { Lista } from 'src/app/models/lista';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

    @Input() index: any = 0;
    liste !: Lista[];

    constructor(private listManager : ListManagerService) { }
    ngOnInit(): void {
        
        this.liste = this.listManager.lists;
    }
    share() {

        alert("Shared, trust me");
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
