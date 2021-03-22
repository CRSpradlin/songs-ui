import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongEntryComponent } from './song-entry.component';

describe('SongEntryComponent', () => {
  let component: SongEntryComponent;
  let fixture: ComponentFixture<SongEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
