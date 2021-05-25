let calculateFeatureAverages = songFeatures => {
  const total = songFeatures.reduce((total, song) => {
    for (let k in song) {
      if (k in total) {
        total[k] = total[k] + song[k];
      } else {
        total[k] = song[k];
      }
    }
    return total;
  }, {});

  for (let k in total) {
    total[k] = Math.round(total[k] * 1000 / songFeatures.length, 2) / 1000;
  }

  return total;
};

module.exports = calculateFeatureAverages;
