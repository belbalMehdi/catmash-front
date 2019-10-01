import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCatComponent } from './rate-cat.component';

describe('RateCatComponent', () => {
  let component: RateCatComponent;
  let fixture: ComponentFixture<RateCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
