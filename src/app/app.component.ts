import { Component, OnInit, ViewChild } from '@angular/core';
import {DefaultService, PokemonDetailDto, TypesInfoWithMetaDto } from '../xhr_client';
import { PokeListViewComponent } from './poke-list-view/poke-list-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    poke_types : TypesInfoWithMetaDto[] | null = null;
    @ViewChild(PokeListViewComponent, { static: false }) pokelistSelector!: PokeListViewComponent;
    pokemon : PokemonDetailDto[] | null = null;
    constructor(){

    }
    ngOnInit(): void {
        DefaultService.getTypes("de")
            .then((value: TypesInfoWithMetaDto[]) => {
                this.poke_types = value;
            })
            .catch((reason) => console.log(reason));
    }
    startPokeSearch(types: string[], nameQuery: string, startsWith: boolean){

      DefaultService
        .getPokemonBytypename("grass", "de")
        .then((value : PokemonDetailDto[]) => {
          if(this.pokelistSelector){
            this.pokelistSelector.setPokemon(value);
          }
        })
    }
  title = 'poke-poke';
}
