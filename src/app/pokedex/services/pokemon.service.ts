import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonShow = true;
  constructor(private httpClient: HttpClient) { }

  getPokemons(limit): Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  }
  getPokemon(id): Promise<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise();
  }
  getPokemonByUrl(url): Promise<any>{
    return this.httpClient.get<any>(`${url}`).toPromise();
  }

  getTypes(): Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/type?limit=999`);
  }
  PokemonShowTrue(): void{
    if (!this.pokemonShow) { this.pokemonShow = true; }
  }
  PokemonShowFalse(): void{
    if (this.pokemonShow) { this.pokemonShow = false; }
  }
}
