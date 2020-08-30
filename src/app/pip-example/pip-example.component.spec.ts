import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipExampleComponent } from './pip-example.component';

describe('PipExampleComponent', () => {
  let component: PipExampleComponent;
  let fixture: ComponentFixture<PipExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
