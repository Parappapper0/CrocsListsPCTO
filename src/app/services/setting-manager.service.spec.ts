import { TestBed } from '@angular/core/testing';

import { SettingManagerService } from './setting-manager.service';

describe('SettingManagerService', () => {
  let service: SettingManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
