import { TestBed } from '@angular/core/testing';

import { AgregarItemService } from './agregar-item.service';

describe('AgregarItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgregarItemService = TestBed.get(AgregarItemService);
    expect(service).toBeTruthy();
  });
});
