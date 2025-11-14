import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  apiUri = '/api/animals';
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

  //Metodo actualizar animal
  updateAnimal(id: any, data: any): Observable<any> {
    console.log(data)
    return this.http.put<any>(
      this.apiUri + '/' + id,
      data,
      { headers: this.httpOptions });
  }

  getOneAnimal(id: any): Observable<any> {
    console.log(this.apiUri + '/' + id)
    return this.http.get<any>(
      this.apiUri + '/' + id,
      { headers: this.httpOptions });
  }

  deleteAnimal(id: any) {
    return this.http.delete<any>(
      this.apiUri + "/" + id,
      { headers: this.httpOptions });
  }

  
}
