import { Component, Input } from '@angular/core';
import { PokemonDetailDto } from 'src/xhr_client';

@Component({
  selector: 'app-poke-list-view',
  templateUrl: './poke-list-view.component.html',
  styleUrls: ['./poke-list-view.component.css']
})
export class PokeListViewComponent {
  pokemon_list : PokemonDetailDto[] | null = null;
  setPokemon(pokemon: PokemonDetailDto[]){
    console.log(pokemon);
    this.pokemon_list = pokemon;
  }
}
