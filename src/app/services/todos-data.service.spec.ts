import { TestBed, inject } from '@angular/core/testing';

import { TodosDataService } from './todos-data.service';

describe('TodosDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosDataService]
    });
  });

  it('should ...', inject([TodosDataService], (service: TodosDataService) => {
    expect(service).toBeTruthy();
  }));
});
