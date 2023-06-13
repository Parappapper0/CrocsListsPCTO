import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  providers: [ListManagerService]
})
export class ListCardComponent {

    @Input() titolo: string = "Title";
    @Input() index: string = "";
    @Input() elementi: Elemento[] = [];

    @Output() deleteListEvent = new EventEmitter<number>();

    constructor(protected listManager : ListManagerService) { }

    onShare() {

        alert("Pensavi davvero che facesse qualcosa?")
        alert(this.titolo);
    }

    onDelete() {

        this.deleteListEvent.emit(parseInt(this.index));
    }

    elementiToString(): string {
        let s : string = "";
        this.elementi.forEach(element => {
           s += (element.valore + ', ');
        });
        s = s.slice(0, -2);
        return s;
    }
}
