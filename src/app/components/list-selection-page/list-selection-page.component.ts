import { Component, Input } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';
import { Lista } from 'src/app/models/lista';

@Component({
  selector: 'app-list-selection-page',
  templateUrl: './list-selection-page.component.html',
  styleUrls: ['./list-selection-page.component.scss']
})
export class ListSelectionPageComponent {

    @Input() titolo : string = "Titolo";
    lists : Lista[] = [];

    onDelete(index : number) {

        this.lists.splice(index, 1);
        for(let i = index; i < this.lists.length; i++) 
            this.lists[i].index--;
    }

    onAdd() {
        this.lists.push(new Lista("Titolo", this.lists.length));
        console.log(this.lists);
    }
}
