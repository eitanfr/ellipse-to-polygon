"use strict";
import transformRotate from '@turf/transform-rotate';
import { polygon, earthRadius } from '@turf/helpers';


function toRadians(angleInDegrees) {
  return angleInDegrees * Math.PI / 180;
}

function toDegrees(angleInRadians) {
  return angleInRadians * 180 / Math.PI;
}

function ellipseToPolygon(center, semiMajorAxis, semiMinorAxis, angleDegrees, pointsAmount = 360) {
  let majorX = semiMajorAxis / (earthRadius * Math.cos(toRadians(semiMinorAxis))); //  (radius of the earth) wgs84
  let minorY = semiMinorAxis / earthRadius; //  (radius of the earth) wgs84

  const points = [];

  const delta = toRadians(360 / pointsAmount);
  for (let i = 0; i < pointsAmount; i++) {
    const t = i * delta;
    const x = majorX * Math.cos(t);
    const y = minorY * Math.sin(t);

    const rot_x = toRadians(center[0]) + x;
    const rot_y = toRadians(center[1]) + y;

    const point = [toDegrees(rot_x), toDegrees(rot_y)];
    points.push(point);
  }

  const poly = polygon([[...points, points[0]]]);
  const options = {pivot: center};
  const rotatedPoly = transformRotate(poly, angleDegrees, options);

  return rotatedPoly.geometry.coordinates[0];
};

export default ellipseToPolygon;
