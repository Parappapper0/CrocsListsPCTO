import { Component, Input } from '@angular/core';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.scss']
})
export class ListViewPageComponent {

    constructor(protected listManager : ListManagerService) { }
}
