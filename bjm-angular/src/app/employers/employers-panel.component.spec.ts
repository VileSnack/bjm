import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersPanelComponent } from './employers-panel.component';

describe('EmployersPanelComponent', () => {
  let component: EmployersPanelComponent;
  let fixture: ComponentFixture<EmployersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployersPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
