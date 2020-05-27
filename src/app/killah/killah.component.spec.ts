import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillahComponent } from './killah.component';

describe('KillahComponent', () => {
  let component: KillahComponent;
  let fixture: ComponentFixture<KillahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
