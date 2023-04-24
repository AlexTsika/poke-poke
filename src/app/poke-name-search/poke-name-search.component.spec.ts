import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNameSearchComponent } from './poke-name-search.component';

describe('PokeNameSearchComponent', () => {
  let component: PokeNameSearchComponent;
  let fixture: ComponentFixture<PokeNameSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeNameSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
