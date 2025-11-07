import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  apiUri = '/api/animalitos';
  //apiUri2 = '/api/all';  
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient){

  }

  //Metodo consultar todos los animales
  getAllAnimalsData(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }

  //Metodo crear nuevo animal
  newAnimal(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      data,
      { headers: this.httpOptions });
  }

}
