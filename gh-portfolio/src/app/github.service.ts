import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  readonly userName = 'Bez-code';
  private apiUrl = 'https://api.github.com';

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${this.userName}`)
  }

}
