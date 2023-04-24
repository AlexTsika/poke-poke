import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypeSelectorComponent } from './poke-type-selector.component';

describe('PokeTypeSelectorComponent', () => {
  let component: PokeTypeSelectorComponent;
  let fixture: ComponentFixture<PokeTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
