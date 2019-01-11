import { TestBed } from '@angular/core/testing';

import { MuebleService } from './mueble.service';

describe('MuebleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuebleService = TestBed.get(MuebleService);
    expect(service).toBeTruthy();
  });
});
