import { TestBed } from '@angular/core/testing';

import { ManageQuestionService } from './manage-question.service';

describe('ManageQuestionService', () => {
  let service: ManageQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
