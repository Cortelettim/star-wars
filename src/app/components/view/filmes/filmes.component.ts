
import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/app/service/filmes.model';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Filmes[]
  constructor(private api: ApiService,

    ) { }

  ngOnInit(): void {
    this.api.read().subscribe((filme) => {
      this.filmes = filme.results
      console.log(this.filmes)
    })
  }

}
