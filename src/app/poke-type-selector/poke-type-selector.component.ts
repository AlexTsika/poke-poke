import { Component, Input } from '@angular/core';
import { TypesInfoWithMetaDto } from 'src/xhr_client';

@Component({
  selector: 'app-poke-type-selector',
  templateUrl: './poke-type-selector.component.html',
  styleUrls: ['./poke-type-selector.component.css']
})
export class PokeTypeSelectorComponent {

  @Input() poke_types: TypesInfoWithMetaDto[] | null = null;
  remove(item: any){
    this.selectedItems = this.selectedItems.filter(selectedItem => item.Name !== selectedItem.Name);
  }
  selectedItems : TypesInfoWithMetaDto[] = [];
  getSelectedItems() : string[]{
    if(!this.selectedItems) return [];
    return this.selectedItems.map(item => item.Name ?? "");
  }
}
