import { SanitizeAgePipe } from './sanitize-age.pipe';

describe('sanitizeAgePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeAgePipe();
    expect(pipe).toBeTruthy();
  });
});
