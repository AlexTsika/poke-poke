import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-poke-name-search',
  templateUrl: './poke-name-search.component.html',
  styleUrls: ['./poke-name-search.component.css']
})
export class PokeNameSearchComponent implements OnInit{
  @ViewChild('queryText', { static: false }) queryText!: ElementRef;

  getValue() : { Query: string, StartsWith: boolean } {
    let startsWith = false;
    if(this.searchForm != null){
      startsWith = this.searchForm.get('searchType')!.value == 'startswith';
    }
    return { Query: this.queryText.nativeElement.value, StartsWith: startsWith};
  }

  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchType: ['Contains']
    });
  }
}
