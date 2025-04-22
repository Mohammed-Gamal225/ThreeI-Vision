import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private apiUrl = 'https://localhost:7128/api'; 

  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, payload);
  }

  fetchUsers(): any {
     return this.http.get<any[]>(`${this.apiUrl}/Dashboard/summary`);
    }
    fetchUserLoginDetails(userName:string): any {
      return this.http.get<any[]>(`${this.apiUrl}/Dashboard/user-audit/${userName}`);
     }
}
