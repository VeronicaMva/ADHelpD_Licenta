import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsTabComponent } from './meetings.tab.component';

describe('Meetings.TabComponent', () => {
  let component: MeetingsTabComponent;
  let fixture: ComponentFixture<MeetingsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
