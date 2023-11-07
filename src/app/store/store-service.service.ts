import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStore } from './store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  url: string = 'http://localhost:3000/store';

  constructor(private httpCliente: HttpClient) {}
  //metodo para obtener todos los productos
  findAll(): Observable<IStore[]>{
    return this.httpCliente.get<IStore[]>(this.url);
  }
  //metodo para obtener un producto
  findById(id: number): Observable<IStore>{
    return this.httpCliente.get<IStore>(`${this.url}/${id}`);
  }
  //metodo para crear un producto
  create(store: IStore): Observable<IStore>{
    return this.httpCliente.post<IStore>(this.url, store);
  }
  //metodo para actualizar un producto
  update(store: IStore): Observable<IStore>{
    return this.httpCliente.put<IStore>(`${this.url}/${store.id}`, store);
  }
  //metodo para eliminar un producto
  delete(id: number): Observable<IStore>{
    return this.httpCliente.delete<IStore>(`${this.url}/${id}`);
  }
}
