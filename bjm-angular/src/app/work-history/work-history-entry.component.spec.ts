import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryEntryComponent } from './work-history-entry.component';

describe('WorkHistoryEntryComponent', () => {
  let component: WorkHistoryEntryComponent;
  let fixture: ComponentFixture<WorkHistoryEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkHistoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
