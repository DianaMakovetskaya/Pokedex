import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../../../models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  pokemon: Pokemon;
  constructor(private pokemonService: PokemonService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }
// При натискані на певного покемона,відображаємо всі його властивості, тобто переходимо на компоненту FullPokemonComponent
  goTo(): void {
    this.router.navigate([this.pokemon.id], {relativeTo: this.activatedRoute, state: this.pokemon});
  }
}
