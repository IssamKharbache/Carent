export const getDistance = (firstLat, firstLong, secondLat, secondLong) => {
  const radius = 6371;
  const dLat = deg2red(secondLat - firstLat);
  const dLong = deg2red(secondLong - firstLong);

  const result =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2red(firstLat)) *
      Math.cos(deg2red(secondLat)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(result), Math.sqrt(1 - result));
  const distance = radius * c;

  return distance;
};

function deg2red(deg) {
  return deg * (Math.PI / 180);
}
