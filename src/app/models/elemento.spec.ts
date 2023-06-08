import { Elemento } from './elemento';

describe('Elemento', () => {
  it('should create an instance', () => {
    expect(new Elemento("0", 0)).toBeTruthy();
  });
});
