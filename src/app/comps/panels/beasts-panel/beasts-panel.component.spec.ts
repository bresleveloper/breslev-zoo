import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastsPanelComponent } from './beasts-panel.component';

describe('BeastsPanelComponent', () => {
  let component: BeastsPanelComponent;
  let fixture: ComponentFixture<BeastsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeastsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
