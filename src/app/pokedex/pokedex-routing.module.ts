import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullPokemonComponent} from './components/full-pokemon/full-pokemon.component';

const appRoutes: Routes = [
  {
    path: ':id', component: FullPokemonComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexRoutingModule {}
