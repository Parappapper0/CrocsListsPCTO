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

    addList(titolo: string): void {

        this.lists.push(new Lista(titolo));
    }

    removeList(index: number): void {

        this.lists.splice(index, 1);
    }

    addElement(content: string): void {

        this.lists[this.open].elementi.push(new Elemento(content));
    }

    removeElement(index: number) {

        this.lists[this.open].elementi.splice(index, 1);
    }

    elementiToString(): string {
        let s: string = "";
        this.lists[this.open].elementi.forEach(element => {
            s += (element.valore + ', ');
        });
        s = s.slice(0, -2);
        return s;
    }

    getCurrentList(): Lista {
        return this.lists[this.open];
    }
}
