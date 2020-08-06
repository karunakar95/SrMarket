import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverSpotlightsComponent } from './discover-spotlights.component';

describe('DiscoverSpotlightsComponent', () => {
  let component: DiscoverSpotlightsComponent;
  let fixture: ComponentFixture<DiscoverSpotlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverSpotlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverSpotlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
