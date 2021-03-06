import {Routes} from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'busca', component: BuscarComponent },
    {path: 'artista/:id', component: ArtistaComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];
   