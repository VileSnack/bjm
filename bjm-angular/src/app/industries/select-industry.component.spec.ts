import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIndustryComponent } from './select-industry.component';

describe('SelectIndustryComponent', () => {
  let component: SelectIndustryComponent;
  let fixture: ComponentFixture<SelectIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectIndustryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
