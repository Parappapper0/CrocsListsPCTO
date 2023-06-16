import { Elemento } from "./elemento";

export class Lista {

    public titolo : string;
    public elementi : Elemento[];
    public shouldReorder : boolean;

    constructor(tit : string, shouldReorder: boolean = false, elementi: Elemento[] = []) {
        this.titolo = tit;
        this.elementi = elementi;
        this.shouldReorder = shouldReorder;
    }
}
