import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormValidationComponent } from './template-form-validation.component';

describe('TemplateFormValidationComponent', () => {
  let component: TemplateFormValidationComponent;
  let fixture: ComponentFixture<TemplateFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
