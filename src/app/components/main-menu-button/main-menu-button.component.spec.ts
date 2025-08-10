import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuButtonComponent } from './main-menu-button.component';

describe('MainMenuComponent', () => {
  let component: MainMenuButtonComponent;
  let fixture: ComponentFixture<MainMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
