import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesPanelComponent } from './industries-panel.component';

describe('IndustriesPanelComponent', () => {
  let component: IndustriesPanelComponent;
  let fixture: ComponentFixture<IndustriesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustriesPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustriesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
