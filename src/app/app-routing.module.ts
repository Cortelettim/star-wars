import { FilmesComponent } from './components/view/filmes/filmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagensComponent } from './components/view/personagens/personagens.component';

const routes: Routes = [{
  path: '', component: FilmesComponent
},{
  path: 'personagens', component: PersonagensComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
