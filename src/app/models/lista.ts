import { Elemento } from "./elemento";

export class Lista {

    titolo : string;
    index : string;
    elementi : Elemento[] = [];

    constructor(tit : string, id : string) {
        this.titolo = tit;
        this.index = id;
    }
}
