export class Elemento {

    public valore: string;
    public descri: string;
    public checked: boolean;

    constructor(val: string) {
        this.valore = val;
        this.checked = false;
        this.descri = "";
    }
}
