import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type': 'applicantion/json', 

  })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url: string = 'api/produtos';

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  PegarProdutoPeloId(id: number): Observable<Produto> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.get<Produto>(apiUrl);
  }

  NovoProduto(produto: Produto): Observable<any>{
    return this.http.post<Produto>(this.url, produto, httpOptions);
  }

  AtualizarProduto(id: number, produto: Produto): Observable<any> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.put<Produto>(apiUrl, produto, httpOptions);
  }

  ExcluirProduto(id: number): Observable<any> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
} 
