import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../service/api.service';
import { Personagens } from '../../../service/personagens.model';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
  control
  url = 'https://swapi.dev/api/people/'
  personagens: Personagens[]
  displayedColumns = ['id', 'name', 'director', 'producer']
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadPeople(this.url)
  }

  // tslint:disable-next-line: typedef
  loadPeople(url: string ) {
    if ( !this.control?.next) {
      this.api.getPeople(url).subscribe((personagens: any) => {
        this.control = personagens
        this.personagens = personagens.results
        this.loadPeople(this.control.next)
      })
    } else {
      return this.api.getPeople(this.control.next).subscribe((personagens: any) => {
        this.control = personagens
        this.personagens = personagens.results
        this.loadPeople(this.control.next)
      })
    }

  }
}
