import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsPanelComponent } from './birds-panel.component';

describe('BirdsPanelComponent', () => {
  let component: BirdsPanelComponent;
  let fixture: ComponentFixture<BirdsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
