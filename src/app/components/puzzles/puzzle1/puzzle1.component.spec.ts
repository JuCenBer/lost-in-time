import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzle1Component } from './puzzle1.component';

describe('Puzzle1Component', () => {
  let component: Puzzle1Component;
  let fixture: ComponentFixture<Puzzle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzzle1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Puzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
