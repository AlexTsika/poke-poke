import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DefaultService } from 'src/xhr_client';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { PokeTypeSelectorComponent } from './poke-type-selector/poke-type-selector.component';
import { PokeNameSearchComponent } from './poke-name-search/poke-name-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokeListViewComponent } from './poke-list-view/poke-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    PokeTypeSelectorComponent,
    SearchHeaderComponent,
    PokeNameSearchComponent,
    PokeListViewComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
