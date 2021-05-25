const calculateFeatureAverages = require('./calculateFeatureAverages');
const getMood = require('./getMood');

const getOverview = (recentSongFeatures) => {
  const featureAverages = calculateFeatureAverages(
    recentSongFeatures
  );
  const mood = getMood(featureAverages.energy, featureAverages.valence);

  return {
    mood: mood,
    features: featureAverages,
  };
};

module.exports = getOverview;
