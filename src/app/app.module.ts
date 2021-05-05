import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { FilmesComponent } from './components/view/filmes/filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonagensComponent } from './components/view/personagens/personagens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmesComponent,
    PersonagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
