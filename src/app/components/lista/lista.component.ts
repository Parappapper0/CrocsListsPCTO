import { Component, Input } from '@angular/core';
import { Elemento } from '../../models/elemento';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

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
