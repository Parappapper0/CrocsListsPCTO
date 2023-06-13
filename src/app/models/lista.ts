import { Elemento } from "./elemento";

export class Lista {

    public titolo : string;
    public elementi : Elemento[];

    constructor(tit : string) {
        this.titolo = tit;
        this.elementi = [];
    }
}
