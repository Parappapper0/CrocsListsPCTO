import { Elemento } from "./elemento";

export class Lista {

    public titolo : string;
    public elementi : Elemento[];
    public shouldReorder : boolean;

    constructor(tit : string) {
        this.titolo = tit;
        this.elementi = [];
        this.shouldReorder = false;
    }
}
