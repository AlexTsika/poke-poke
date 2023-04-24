import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TypesInfoWithMetaDto } from 'src/xhr_client';
import { PokeTypeSelectorComponent } from '../poke-type-selector/poke-type-selector.component';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent {
  @Input() poke_types: TypesInfoWithMetaDto[] | null = null;
  @ViewChild(PokeTypeSelectorComponent, { static: false }) pokeTypeSelector!: ElementRef<PokeTypeSelectorComponent>;
  submit() {
    if (this.pokeTypeSelector && this.pokeTypeSelector.nativeElement) {
      console.log(this.pokeTypeSelector.nativeElement.getSelectedItems());
    }
    else {
      console.log("nog altijd null, lull");
    }
  }
}
