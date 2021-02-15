import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import {HttpClientModule} from '@angular/common/http';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {PokedexRoutingModule} from './pokedex-routing.module';
import { FullPokemonComponent } from './components/full-pokemon/full-pokemon.component';



@NgModule({
  declarations: [LogoComponent, PokemonsComponent, PokemonComponent, FullPokemonComponent],
  exports: [
    LogoComponent,
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
