import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/app/models/place.model';
import { CrudService } from 'src/app/services/crud.service';


export interface PeriodicElement {
  nome: string;
  matricula: number;

}

export class ButtonOverviewExample {}

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {
  lista: ListaModel[];
  error: any;

  constructor(private  crudService:CrudService) { }

  ngOnInit(): void {
    this.getter()
  }
  getter(){
    this.crudService.getLista().subscribe( data => {
      this.lista=data
      console.log(data);
      console.log(this.lista)

      },
      error =>{this.error=error;

      });
    }
}
