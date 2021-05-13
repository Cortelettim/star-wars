import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { Filmes } from '../../../service/filmes.model';
import { element } from 'protractor';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.component.html',
  styleUrls: ['./filmes-detalhes.component.css'],
})
export class FilmesDetalhesComponent implements OnInit {
  filmes: Filmes[];
  id: number;
  filme;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.api.read().subscribe((filme) => {
      this.filmes = filme.results
      // tslint:disable-next-line: no-shadowed-variable
      this.filmes.forEach((element: Filmes) => {
        if (element.episode_id === this.id){
          this.filme = element
        }
      })
    })

  }
}
