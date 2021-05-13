import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagensComponent } from './components/view/personagens/personagens.component';
import { FilmesDetalhesComponent } from './components/view/filmes-detalhes/filmes-detalhes.component';
import { FilmesComponent } from './components/view/filmes/filmes.component';
const routes: Routes = [
  {
    path: '',
    component: FilmesComponent,
  },
  {
    path: 'filmes-detalhes/:id',
    component: FilmesDetalhesComponent,
  },
  {
    path: 'personagens',
    component: PersonagensComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
