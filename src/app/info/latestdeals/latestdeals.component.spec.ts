import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestdealsComponent } from './latestdeals.component';

describe('LatestdealsComponent', () => {
  let component: LatestdealsComponent;
  let fixture: ComponentFixture<LatestdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestdealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
