import { Component, Input } from '@angular/core';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-selection-page',
  templateUrl: './list-selection-page.component.html',
  styleUrls: ['./list-selection-page.component.scss'],
  providers: [ListManagerService]
})
export class ListSelectionPageComponent {

    constructor(protected listManager: ListManagerService) { }
}
