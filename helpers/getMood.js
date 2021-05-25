const radToDegrees = (radian) => {
  return (radian * 180) / Math.PI;
};

const getQuadrant = (x, y) => {
  let quad;
  if (x >= 0 && y >= 0) {
    quad = 1;
  } else if (x >= 0 && y < 0) {
    quad = 4;
  } else if (x < 0 && y >= 0) {
    quad = 2;
  } else {
    quad = 3;
  }

  return quad;
};

const transform = (value) => {
  return value * 2 - 1;
};

const getAngle = (energy, valence) => {
  if (energy < 0 || energy > 1) {
    throw new Error('Improper energy value provided');
  } else if (valence < 0 || valence > 1) {
    throw new Error('Improper valence value provided');
  }

  const transformedEnergy = transform(energy);
  const transformedValence = transform(valence);

  const thetaRad = Math.abs(Math.atan(transformedEnergy / transformedValence));
  const thetaDeg = radToDegrees(thetaRad);
  const quad = getQuadrant(transformedValence, transformedEnergy);
  let angle;

  switch (quad) {
    case 1:
      angle = thetaDeg;
      break;
    case 2:
      angle = 180 - thetaDeg;
      break;
    case 3:
      angle = 180 + thetaDeg;
      break;
    case 4:
      angle = 360 - thetaDeg;
      break;
    default:
      angle = 0;
  }

  return angle;
};

const getMood = (energy, valence) => {
  const angle = getAngle(energy, valence);
  let mood;

  if (angle >= 330) {
    mood = 'relaxed';
  } else if (angle >= 300) {
    mood = 'peaceful';
  } else if (angle >= 270) {
    mood = 'calm';
  } else if (angle >= 240) {
    mood = 'sleepy';
  } else if (angle >= 210) {
    mood = 'bored';
  } else if (angle >= 180) {
    mood = 'sad';
  } else if (angle >= 150) {
    mood = 'frustrated';
  } else if (angle >= 120) {
    mood = 'angry';
  } else if (angle >= 90) {
    mood = 'tense';
  } else if (angle >= 60) {
    mood = 'excited';
  } else if (angle >= 30) {
    mood = 'happy';
  } else {
    mood = 'pleased';
  }

  return mood;
};

module.exports = getMood;
