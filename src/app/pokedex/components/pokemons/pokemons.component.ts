import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: any[];
  filterPokemons: any[];
  types: any[];
  limit = 12;
  idType = 0;
  results: any[];
  start: 1;

  constructor(public pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  load(): void {
    this.limit += 12;
    this.getData();
  }

  getData(): void {
    this.pokemonService.getPokemons(this.limit).subscribe(async value => {
      const pokemons = [];
      for await (const pokemon of value.results) {
        const data = await this.pokemonService.getPokemonByUrl(pokemon.url);
        pokemons.push(data);
      }
      this.pokemons = pokemons;
    });
    this.pokemonService.getTypes().subscribe(data => {
      this.types = data.results;
    });
  }

  filter = (value) => {
    this.filterPokemons = this.pokemons.filter(({types}) => {
      return types.find(({type}) => type.name === value);
    });
    this.pokemonService.PokemonShowFalse();
  };

  clearFilteredPokemons(): void {
    this.filterPokemons = null;
    this.pokemonService.PokemonShowTrue();
  }
}
