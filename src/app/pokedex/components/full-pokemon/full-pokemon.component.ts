import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-full-pokemon',
  templateUrl: './full-pokemon.component.html',
  styleUrls: ['./full-pokemon.component.css']
})
export class FullPokemonComponent implements OnInit {

  pokemon: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public pokemonService: PokemonService) {
    this.activatedRoute.params.subscribe(value => {
      this.pokemon = this.router.getCurrentNavigation().extras.state;
      this.pokemonService.PokemonShowTrue();

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
