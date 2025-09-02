import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastHintComponent } from './last-hint.component';

describe('LastHintComponent', () => {
  let component: LastHintComponent;
  let fixture: ComponentFixture<LastHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastHintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
