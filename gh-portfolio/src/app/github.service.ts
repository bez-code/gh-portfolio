import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  readonly userName = 'Bez-code';
  private userUrl = 'https://api.github.com/users'+this.userName;

  getUser(): Observable<User> {
    return this.http.get<User>(this.userName)
  }
  getRepos():Observable<Repository[]>{
    return this.http.get<Repository[]>(this.userUrl+'/repos');
  }
}
