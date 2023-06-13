import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
    selector: 'app-elemento',
    templateUrl: './elemento.component.html',
    styleUrls: ['./elemento.component.scss'],
    providers: [ListManagerService]
})
export class ElementoComponent {

    @Input() id : any = 0;

    constructor(protected listManager : ListManagerService) { }
}
