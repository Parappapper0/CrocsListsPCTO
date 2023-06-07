import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-elemento',
    templateUrl: './elemento.component.html',
    styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent {

    @Input() content : string = '';
    @Input() index : string = "-1";

    @Output() deleteEvent = new EventEmitter<number>();

    onDelete() {
        
        this.deleteEvent.emit(parseInt(this.index));
    }
    checked : boolean = false;
}
