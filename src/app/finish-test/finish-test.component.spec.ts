import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishTestComponent } from './finish-test.component';

describe('FinishTestComponent', () => {
  let component: FinishTestComponent;
  let fixture: ComponentFixture<FinishTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
