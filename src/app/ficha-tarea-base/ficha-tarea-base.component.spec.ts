import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTareaBaseComponent } from './ficha-tarea-base.component';

describe('FichaTareaBaseComponent', () => {
  let component: FichaTareaBaseComponent;
  let fixture: ComponentFixture<FichaTareaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTareaBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaTareaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
