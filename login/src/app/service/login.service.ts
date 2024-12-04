import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8082/login';  // Update with your backend API endpoint

  constructor(private http: HttpClient) { }

  // Method to send login request to the backend
  login(userId: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { userId, password });
  }
}
