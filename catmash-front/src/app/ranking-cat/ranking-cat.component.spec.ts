import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingCatComponent } from './ranking-cat.component';

describe('RankingCatComponent', () => {
  let component: RankingCatComponent;
  let fixture: ComponentFixture<RankingCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
