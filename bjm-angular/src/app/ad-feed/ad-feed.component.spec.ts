import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFeedComponent } from './ad-feed.component';

describe('AdFeedComponent', () => {
  let component: AdFeedComponent;
  let fixture: ComponentFixture<AdFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
