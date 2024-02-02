import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamingStyleComponent } from './naming-style.component';

describe('NamingStyleComponent', () => {
  let component: NamingStyleComponent;
  let fixture: ComponentFixture<NamingStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NamingStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamingStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
