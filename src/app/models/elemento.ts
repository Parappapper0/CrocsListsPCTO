export class Elemento {

    public valore: string;
    public descri: string;
    public checked: boolean;

    constructor(val: string, descri: string = "", checked: boolean = false) {
        this.valore = val;
        this.checked = checked;
        this.descri = descri;
    }
}
