const calculateFeatureAverages = require('./calculateFeatureAverages');

let songFeatures;

describe('When all features have values', () => {
  beforeEach(() => {
    songFeatures = [
      {
        valence: 0.87,
        energy: 0.55,
        danceability: 0.67,
        tempo: 123.69,
      },
      {
        valence: 0.77,
        energy: 0.59,
        danceability: 0.38,
        tempo: 98.24,
      },
      {
        valence: 0.38,
        energy: 0.35,
        danceability: 0.26,
        tempo: 113.42,
      },
    ];
  });

  test('Resulting object has all properties', () => {
    const averages = calculateFeatureAverages(songFeatures);
    expect(averages).toHaveProperty('valence');
    expect(averages).toHaveProperty('energy');
    expect(averages).toHaveProperty('danceability');
    expect(averages).toHaveProperty('tempo');
  });

  test('Gives correct values to 3 decimal places', () => {
    const averages = calculateFeatureAverages(songFeatures);
    expect(averages).toEqual({
      valence: 0.673,
      energy: 0.497,
      danceability: 0.437,
      tempo: 111.783,
    });
  });
});
