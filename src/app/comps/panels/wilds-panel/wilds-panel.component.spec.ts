import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildsPanelComponent } from './wilds-panel.component';

describe('WildsPanelComponent', () => {
  let component: WildsPanelComponent;
  let fixture: ComponentFixture<WildsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
