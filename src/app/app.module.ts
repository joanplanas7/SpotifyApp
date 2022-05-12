import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Rutes
import { ROUTES } from './app.routes';


//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TargetesComponent } from './components/targetes/targetes.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TargetesComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash: true} ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
