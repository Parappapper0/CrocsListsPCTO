import { Injectable } from '@angular/core';
import { Lista } from '../models/lista';
import { Elemento } from '../models/elemento';

@Injectable({
    providedIn: 'root'
})
export class ListManagerService {

    constructor() { }

    lists: Lista[] = [];
    open: number = -1;

    openList(index: string): void {

        this.open = parseInt(index);
    }

    addList(titolo: string, shouldReorder : boolean = false, elementi : Elemento[] = []): void {

        this.lists.push(new Lista(titolo, shouldReorder, elementi));
    }

    removeList(index: number): void {

        this.lists.splice(index, 1);
    }

    addElement(content: string): void {

        this.lists[this.open].elementi.push(new Elemento(content));
        if(this.lists[this.open].shouldReorder)
            this.reorder();
    }

    removeElement(index: number) {

        this.lists[this.open].elementi.splice(index, 1);
    }

    elementiToString(index : number): string {

        let s: string = "";

        this.lists[index].elementi.forEach(element => {
            if(element.valore != "" && !element.checked)
                s += ("・" + element.valore + "<br />");
        });

        return s;
    }

    getCurrentList(): Lista {
        return this.lists[this.open];
    }

    reorder() {
        this.lists[this.open].elementi.sort((a: Elemento, b : Elemento) => Number(a.checked) - Number(b.checked));
    }
}
