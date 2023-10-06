import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../Models/tema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  URL = "http://localhost:8080/tema";

  constructor(private http: HttpClient) {
  }


  public lista():Observable<Tema[]>{
      return this.http.get<Tema[]>(this.URL);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `/delete/${id}`);
      }

  
  public detail(id:number):Observable<Tema>{
    return this.http.get<Tema>(this.URL+ `/detail/${id}`);
  }
  
  
  public save(tema:Tema ):Observable<any>{        
    return this.http.post<any>(this.URL + `/create`, tema);
  }
  public update(tema:Tema):Observable<any>{
    return this.http.put<any>(this.URL + `/update`,tema);
}
}
