import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

    @Input() index: any = 0;

    constructor(protected listManager : ListManagerService) { }

    share() {

        alert("Shared, trust me");
    }
}
