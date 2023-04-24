import { Component, Input } from '@angular/core';
import { TypesInfoWithMetaDto } from 'src/xhr_client';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent {
  @Input() poke_types: TypesInfoWithMetaDto[] | null = null;
  remove(item: any){
    this.selectedItems = this.selectedItems.filter(selectedItem => item.Name !== selectedItem.Name);
  }
  selectedItems : any[] = [];
}
