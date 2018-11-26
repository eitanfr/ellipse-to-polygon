# ellipse-to-polygon
Receives a Coordinate and ellipse properties  and aproximates a ellipse by creating a polygon that fills its area
The GeoJSON spec does not support ellipses. If you wish to create an area that represents an ellipse, your best bet is to create a polygon that roughly approximates the circle. In the limit of the number of edges becoming infinite, your Polygon will match a circle.

## Installation

`npm install --save ellipse-to-polygon`

## Usage

```javascript
const ellipseToPolygon = require('ellipse-to-polygon');

const center = [-27.4575887, -58.99029]; // [lon, lat] degrees
const numberOfEdges = 32;                // optional that defaults to 360
const semiMinorAxis = 25000.0;           // in meters
const semiMajorAxis = 40000.0;           // in meters
const angle = 45.0;                      // in degrees

const points = ellipseToPolygon(center, semiMajorAxis, semiMinorAxis, angle, numberOfEdges);
/*
 *
points:
                 [ [ -27.457588699999995, -58.98939168471588 ],
                    [ -27.457248533454194, -58.98940894514629 ],
                    [ -27.456921438327615, -58.9894600631796 ],
                    [ -27.45661998386292, -58.98954307452298 ],
                    [ -27.4563557542251, -58.989654789313285 ],
                    [ -27.456138903413915, -58.98979091466893 ],
                    [ -27.45597776508136, -58.98994621962397 ],
                    [ -27.45587853224417, -58.99011473611232 ],
                    [ -27.455845019204208, -58.99028998828441 ],
                    [ -27.455878514839235, -58.99046524134828 ],
                    [ -27.455977732921237, -58.99063376037627 ],
                    [ -27.456138861394688, -58.99078906913211 ],
                    [ -27.456355708743818, -58.990925198971134 ],
                    [ -27.45661994184369, -58.99103691824481 ],
                    [ -27.45692140616749, -58.99111993338897 ],
                    [ -27.457248516049262, -58.99117105396192 ],
                    [ -27.457588699999995, -58.99118831528412 ],
                    [ -27.45792888395073, -58.99117105396192 ],
                    [ -27.458255993832502, -58.99111993338897 ],
                    [ -27.458557458156303, -58.99103691824481 ],
                    [ -27.458821691256173, -58.990925198971134 ],
                    [ -27.459038538605306, -58.99078906913211 ],
                    [ -27.45919966707875, -58.99063376037627 ],
                    [ -27.459298885160756, -58.99046524134828 ],
                    [ -27.459332380795786, -58.99028998828441 ],
                    [ -27.459298867755823, -58.99011473611232 ],
                    [ -27.459199634918626, -58.98994621962397 ],
                    [ -27.45903849658608, -58.98979091466893 ],
                    [ -27.45882164577489, -58.989654789313285 ],
                    [ -27.458557416137072, -58.98954307452298 ],
                    [ -27.45825596167238, -58.9894600631796 ],
                    [ -27.4579288665458, -58.98940894514629 ],
                    [ -27.457588699999995, -58.98939168471588 ] ]
*/
```
