import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TypesInfoWithMetaDto } from 'src/xhr_client';
import { PokeTypeSelectorComponent } from '../poke-type-selector/poke-type-selector.component';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements AfterViewInit {
  @Input() poke_types: TypesInfoWithMetaDto[] | null = null;
  @Input() startPokeSearch!: (types: string[], nameQuery: string) => void;
  @ViewChild(PokeTypeSelectorComponent, { static: false }) pokeTypeSelector!: PokeTypeSelectorComponent;

  initiated: boolean = false;
  ngAfterViewInit() {
  }

  submit() {

    // 1. Collect selected items
    const selectedTypes = this.pokeTypeSelector.getSelectedItems();
    // 2. Collect name
    this.startPokeSearch(selectedTypes, "");
  }
}
