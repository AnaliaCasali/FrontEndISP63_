import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrera } from '../Models/carrera';
import { Observable } from 'rxjs';
//import { InfoWeb } from '../Models/infoWeb';

@Injectable({
  providedIn: 'root'
})
export class CarreraServicesService {
  URL = "http://localhost:8080/carrera";

  constructor(private http: HttpClient) {
  }


  public lista():Observable<Carrera[]>{
      return this.http.get<Carrera[]>(this.URL);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `/delete/${id}`);
      }

  
  public detail(id:number):Observable<Carrera>{
    return this.http.get<Carrera>(this.URL+ `/detail/${id}`);
  }
  
/*  
  public save(carrera:Carrera ):Observable<any>{        
    return this.http.post<any>(this.URL + `/create`, carrera);
  }
*///id:number,
/*  public update(carrera:Carrera):Observable<any>{
    return this.http.put<any>(this.URL + `/update`,carrera);
  }  
*/
  public update(carrera:Carrera,imagen:any ):Observable<any>{    
    const formData = new FormData();
    console.log( JSON.stringify(carrera));
    formData.append('carreraDTO', JSON.stringify(carrera));
    formData.append('multipartFile', imagen);
    console.log(formData);
    return this.http.put<any>(this.URL + `/update`,formData);
  }  

  
  public save(carrera:Carrera,imagen:any ):Observable<any>{    
    const formData = new FormData();
    console.log( JSON.stringify(carrera));
    formData.append('carreraDTO', JSON.stringify(carrera));
    formData.append('multipartFile', imagen);
    console.log(formData);
    return this.http.post<any>(this.URL+`/create`, formData);  

  }






  





}
//  info: InfoWeb = {}; 

//    this.cargarInfo(); 

/*
  private cargarInfo() {
    console.log("servicio de Info listo");
    this.http.get('assets/data/data.json')
       .subscribe((resp: InfoWeb)  => {
        this.info=resp;
        console.log(this.info);
      
      })
    }

*/