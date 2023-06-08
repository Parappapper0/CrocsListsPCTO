import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-elemento',
    templateUrl: './elemento.component.html',
    styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent {

    content : string = '';
    @Input() index : string = "-1";

    @Output() deleteEvent = new EventEmitter<number>();

    onDelete() {
        
        alert(this.content)
        this.deleteEvent.emit(parseInt(this.index));
    }
    checked : boolean = false;
}
