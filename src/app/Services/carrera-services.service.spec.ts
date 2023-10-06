import { TestBed } from '@angular/core/testing';

import { CarreraServicesService } from './carrera-services.service';

describe('CarreraServicesService', () => {
  let service: CarreraServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreraServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
