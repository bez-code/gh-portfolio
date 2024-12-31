import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';
import { Orginization } from '../orginization';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  orgs$: Observable<Orginization[]> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.orgs$ = this.githubService.getOrganization();
  }


}
