import { A9dPipe } from './a9d.pipe';

describe('A9dPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new A9dPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should ignore empty strings', () => {
    expect( pipe.transform(' ') ).toBe('');
  });

  it('does not modify a single character', () => {
    expect( pipe.transform('i') ).toBe('i');
  });

  it('adds a 0 to a two character word', () => {
    expect( pipe.transform('hi') ).toBe('h0i');
  });

  it('correctly transforms basic alphanumeric word > 2 characters', () => {
    expect(pipe.transform('hello')).toBe('h3o');
  });

  it('strips out hyphens', () => {
    expect(pipe.transform('hyphen-ated')).toBe('h8d');
  });

  it('handles `sentenceEnders` properly', () => {
    expect(pipe.transform('awesome!!')).toBe('a5e!!');
  });
});
