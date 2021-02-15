import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Pokemon} from '../../../../models/Pokemon';
import {Type} from '../../../../models/Type';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];
  filterPokemons: Pokemon[];
  types: Type[];
  limit = 12;
  idType = 0;
  start: 1;

  constructor(public pokemonService: PokemonService) {
  }
// Початково відображається 12 покемонів
  ngOnInit(): void {
    this.getData();
  }
// Збільшуємо наш ліміт та завантажуємо нових покемонів
  load(): void {
    this.limit += 12;
    this.getData();
  }
// Отримуємо дані з нашого сервісу
  getData(): void {
    // отримуємо всіх покемонів. Матимо тільки назву та урлу
    this.pokemonService.getPokemons(this.limit).subscribe(async value => {
      const pokemons = [];
      // Проходимся по кожному покемону,переходимо за урлою в ньому та маємо повну інформацію про покемона
      for await (const pokemon of value.results) {
        const data = await this.pokemonService.getPokemonByUrl(pokemon.url);
        pokemons.push(data);
      }
      this.pokemons = pokemons;
    });
    // Отримуємо всі типи покемонів
    this.pokemonService.getTypes().subscribe(data => {
      this.types = data.results;
    });
  }

  // Фльтруємо наших покемонів
  filter = (value) => {
    this.filterPokemons = this.pokemons.filter(({types}) => {
      return types.find(({type: {name}}) => name === value);
    });
    this.pokemonService.PokemonShowFalse();
  }
  // Очищуємо масив відфільтрованих покемонів, коли відобраєамо всіх покемонів, тобто при натисканні allPokemonsButton
  clearFilteredPokemons(): void {
    this.filterPokemons = null;
    this.pokemonService.PokemonShowTrue();
  }
}
