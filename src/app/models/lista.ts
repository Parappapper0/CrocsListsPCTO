import { Elemento } from "./elemento";

export class Lista {

    titolo : string;
    elementi : Elemento[] = [];

    constructor(tit : string) {
        this.titolo = tit;
    }
}
