import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListViewComponent } from './poke-list-view.component';

describe('PokeListViewComponent', () => {
  let component: PokeListViewComponent;
  let fixture: ComponentFixture<PokeListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
