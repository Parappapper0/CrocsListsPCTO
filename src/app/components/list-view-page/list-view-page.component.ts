import { Component, Input } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.scss'],
  providers: [ListManagerService]
})
export class ListViewPageComponent {

    @Input() titolo : string = "";
    id : number = 0;

    constructor(protected listManager : ListManagerService) { }
}
