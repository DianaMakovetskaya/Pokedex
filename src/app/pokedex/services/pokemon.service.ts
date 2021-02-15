import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from '../../../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonShow = true;
  constructor(private httpClient: HttpClient) { }

  // Отримати всіх покемонів
  getPokemons(limit): Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  }
  // Отримати покемона за айді
  getPokemon(id): Promise<Pokemon>{
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise();
  }
  // Отримати покемона по урлі
  getPokemonByUrl(url): Promise<Pokemon>{
    return this.httpClient.get<Pokemon>(`${url}`).toPromise();
  }
  // Отримати всі типи покемонів
  getTypes(): Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/type?limit=999`);
  }
  // Відображати певний елемент
  PokemonShowTrue(): void{
    if (!this.pokemonShow) { this.pokemonShow = true; }
  }
  // Не відображати певний елемент
  PokemonShowFalse(): void{
    if (this.pokemonShow) { this.pokemonShow = false; }
  }
}
