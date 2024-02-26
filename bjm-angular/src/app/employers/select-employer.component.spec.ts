import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEmployerComponent } from './select-employer.component';

describe('SelectEmployerComponent', () => {
  let component: SelectEmployerComponent;
  let fixture: ComponentFixture<SelectEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
