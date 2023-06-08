import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

    @Input() titolo: string = "Title";
    @Input() index: string = "";
    @Input() elementi: Elemento[] = [];

    @Output() deleteListEvent = new EventEmitter<number>();
    
    onShare() {

        alert("Pensavi davvero che facesse qualcosa?")
    }

    onDelete() {

        this.deleteListEvent.emit(parseInt(this.index));
    }

    elementiToString(): string {
        let s : string = "";
        this.elementi.forEach(element => {
           s += element.valore; 
        });
        return s;
    }
}
