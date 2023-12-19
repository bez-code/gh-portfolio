import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

    readonly userName = 'Bez-code';
    private apiUrl = 'https://api.github.com';

}
