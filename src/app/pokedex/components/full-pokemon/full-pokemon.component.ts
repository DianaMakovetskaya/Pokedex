import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';
import {Pokemon} from '../../../../models/Pokemon';

@Component({
  selector: 'app-full-pokemon',
  templateUrl: './full-pokemon.component.html',
  styleUrls: ['./full-pokemon.component.css']
})
export class FullPokemonComponent implements OnInit {

  pokemon: Pokemon;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public pokemonService: PokemonService) {
    // Отримуємо покемона на якого натиснули
    this.activatedRoute.params.subscribe(value => {
      this.pokemon = this.router.getCurrentNavigation().extras.state as Pokemon;
      this.pokemonService.PokemonShowTrue();

      // Якщо відкрили вкладку вже на конкретному покемоні
      if (!this.pokemon){
        this.activatedRoute.params.subscribe(params => {
          this.pokemonService.getPokemon(params.id).then(value1 => this.pokemon = value1);
        });
      }

    });
  }

  ngOnInit(): void {
  }

}
