import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaModel } from '../models/place.model';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
public getLista(): Observable <ListaModel[]>{
  return this.http.get<ListaModel[]>("https://localhost:7008/Alunos")
}


}
