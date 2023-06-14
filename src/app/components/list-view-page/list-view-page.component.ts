import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from 'src/app/models/lista';
import { ListManagerService } from 'src/app/services/list-manager.service';

@Component({
  selector: 'app-list-view-page',
  templateUrl: './list-view-page.component.html',
  styleUrls: ['./list-view-page.component.scss']
})
export class ListViewPageComponent implements OnInit {

    lista !: Lista;
    shouldLoad: boolean = true;

    constructor(private listManager : ListManagerService, private router: Router, private route: ActivatedRoute) { }
    ngOnInit(): void {
        
        this.lista = this.listManager.getCurrentList();
        if(!this.lista) {
            this.router.navigate([`../home`], {relativeTo: this.route});
            this.shouldLoad = false;
        }
    }

    addElement() {
        this.listManager.addElement('');
    }
}
