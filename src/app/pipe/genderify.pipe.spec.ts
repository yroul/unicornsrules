import { GenderifyPipe } from './genderify.pipe';

describe('GenderifyPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderifyPipe();
    expect(pipe).toBeTruthy();
  });
});
