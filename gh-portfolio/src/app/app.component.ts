import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 constructor( private githubService : GithubService){}


  title = 'gh-portfolio';
  username = ''


  ngOnInit(): void {
    this.username = this.githubService.userName;
  }


}
