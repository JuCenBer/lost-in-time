import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoSecretoComponent } from './codigo-secreto.component';

describe('CodigoSecretoComponent', () => {
  let component: CodigoSecretoComponent;
  let fixture: ComponentFixture<CodigoSecretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoSecretoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigoSecretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
