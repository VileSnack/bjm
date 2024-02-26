import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsPanelComponent } from './positions-panel.component';

describe('PositionsPanelComponent', () => {
  let component: PositionsPanelComponent;
  let fixture: ComponentFixture<PositionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
