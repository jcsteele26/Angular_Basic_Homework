import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WutangComponent } from './wutang.component';

describe('WutangComponent', () => {
  let component: WutangComponent;
  let fixture: ComponentFixture<WutangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WutangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WutangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
