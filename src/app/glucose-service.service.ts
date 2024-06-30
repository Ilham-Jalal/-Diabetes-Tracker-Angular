import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Glucose } from '../model/glucose';

@Injectable({
  providedIn: 'root'
})
export class GlucoseServiceService {
  private apiUrl = 'http://localhost:8081/api/glucose';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Glucose[]> {
    return this.http.get<Glucose[]>(`${this.apiUrl}`);
  }

  save(glucose: Glucose): Observable<Glucose> {
    return this.http.post<Glucose>(`${this.apiUrl}/save`, glucose);
  }
  update(id: number, glucose: Glucose): Observable<Glucose> {
    return this.http.put<Glucose>(`${this.apiUrl}/update/${id}`, glucose);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  findById(id: number): Observable<Glucose> {
    return this.http.get<Glucose>(`${this.apiUrl}/${id}`);
  }
}
