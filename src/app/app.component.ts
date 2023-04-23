import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke-poke';
  poke_items : any[] = [
    {
        "LocalizedName": "Electro",
        "ColorCode": "#F7D02C",
        "Name": "Electric"
        
    },
    {
        "LocalizedName": "Fighting",
        "ColorCode": "#C22E28",
        "Name": "Fighting"
        
    },
    {
        "LocalizedName": "Rock",
        "ColorCode": "#B6A136",
        "Name": "Rock"
    },
    {
        "LocalizedName": "Grass",
        "ColorCode": "#7AC74C",
        "Name": "Grass"
    },
    {
        "LocalizedName": "Psychic",
        "ColorCode": "#F95587",
        "Name": "Psychic"
    },
    {
        "LocalizedName": "Steel",
        "ColorCode": "#B7B7CE",
        "Name": "Steel"
    },
    {
        "LocalizedName": "Dark",
        "ColorCode": "#705746",
        "Name": "Dark"
    },
    {
        "LocalizedName": "Poison",
        "ColorCode": "#A33EA1",
        "Name": "Poison"
    },
    {
        "LocalizedName": "Ghost",
        "ColorCode": "#735797",
        "Name": "Ghost"
    },
    {
        "LocalizedName": "Ground",
        "ColorCode": "#E2BF65",
        "Name": "Ground"
    },
    {
        "LocalizedName": "Flying",
        "ColorCode": "#A98FF3",
        "Name": "Flying"
    },
    {
        "LocalizedName": "Bug",
        "ColorCode": "#A6B91A",
        "Name": "Bug"
    },
    {
        "LocalizedName": "Dragon",
        "ColorCode": "#6F35FC",
        "Name": "Dragon"
    }
];
  items = [
    { id: 1, name: 'Item 1', color: '#aaaaaa' },
    { id: 2, name: 'Item 2', color: '#bbbbbb' },
    { id: 3, name: 'Item 3', color: '#cccccc' },
    { id: 4, name: 'Item 4', color: '#dddddd' },
    { id: 5, name: 'Item 5', color: '#eeeeee' }
  ];
  // Methode ook aangemaakt vr te verwijderen
  remove(item: any){
    this.selectedItems = this.selectedItems.filter(selectedItem => item.Name !== selectedItem.Name);
  }
  selectedItems : any[] = [];
}
