import { Component, Input } from '@angular/core';
import { Elemento } from 'src/app/models/elemento';

@Component({
  selector: 'app-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.scss']
})
export class ListViewPageComponent {

    @Input() titolo : string = "";
    elements : Elemento[] = [];

    onDelete(index : number) {

        this.elements.splice(index, 1);
        for(let i = index; i < this.elements.length; i++) 
            this.elements[i].identifier--;
    }

    onAdd() {
        this.elements.push(new Elemento("", this.elements.length));
        console.log(this.elements);
    }
}
