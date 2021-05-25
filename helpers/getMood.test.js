const getMood = require('./getMood');

describe('Returns the correct mood', () => {
  test('Returns correct mood in quadrant 1', () => {
    const energy = 0.872;
    const valence = 0.621;
    const result = getMood(energy, valence);

    expect(result).toEqual('excited');
  });

  test('Returns correct mood in quadrant 2', () => {
    const energy = 0.98;
    const valence = 0.451;
    const result = getMood(energy, valence);

    expect(result).toEqual('tense');
  });

  test('Returns correct mood in quadrant 3', () => {
    const energy = 0.467;
    const valence = 0.056;
    const result = getMood(energy, valence);

    expect(result).toEqual('sad');
  });

  test('Returns correct mood in quadrant 4', () => {
    const energy = 0.342;
    const valence = 0.649;
    const result = getMood(energy, valence);

    expect(result).toEqual('peaceful');
  });
});

describe('Throws error when given improper inputs', () => {
  test('Throws error with negative energy input', () => {
    const energy = -0.233;
    const valence = 0.431;

    expect(() => getMood(energy, valence)).toThrow(
      'Improper energy value provided'
    );
  });

  test('Throws error with energy input greater than 1', () => {
    const energy = 1.001;
    const valence = 0.431;

    expect(() => getMood(energy, valence)).toThrow(
      'Improper energy value provided'
    );
  });

  test('Throws error with negative valence input', () => {
    const energy = 0.009;
    const valence = -0.321;

    expect(() => getMood(energy, valence)).toThrow(
      'Improper valence value provided'
    );
  });

  test('Throws error with valence input greater than 1', () => {
    const energy = 0.009;
    const valence = 1.123;

    expect(() => getMood(energy, valence)).toThrow(
      'Improper valence value provided'
    );
  });
});
