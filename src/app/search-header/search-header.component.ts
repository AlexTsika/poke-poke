import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TypesInfoWithMetaDto } from 'src/xhr_client';
import { PokeTypeSelectorComponent } from '../poke-type-selector/poke-type-selector.component';
import { PokeNameSearchComponent } from '../poke-name-search/poke-name-search.component';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements AfterViewInit {
  @Input() poke_types: TypesInfoWithMetaDto[] | null = null;
  @Input() startPokeSearch!: (types: string[], nameQuery: string, startsWith: boolean) => void;
  @ViewChild(PokeTypeSelectorComponent, { static: false }) pokeTypeSelector!: PokeTypeSelectorComponent;
  @ViewChild(PokeNameSearchComponent, { static: false }) pokeNameSelector!: PokeNameSearchComponent;

  initiated: boolean = false;
  ngAfterViewInit() {
  }

  submit() {

    // 1. Collect selected items
    const selectedTypes = this.pokeTypeSelector.getSelectedItems();
    // 2. Collect name
    const nameQuery = this.pokeNameSelector.getValue();
    
    this.startPokeSearch(selectedTypes, nameQuery.Query, nameQuery.StartsWith);
  }
}
