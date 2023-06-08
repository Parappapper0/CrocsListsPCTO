import { Elemento } from "./elemento";

export class Lista {

    titolo : string;
    index : number;
    elementi : Elemento[] = [];

    constructor(tit : string, id : number) {
        this.titolo = tit;
        this.index = id;
    }
}
