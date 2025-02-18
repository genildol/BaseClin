function mercator(lambda, phi) {
  const x = lambda;
  const y = Math.log(Math.tan(Math.PI / 4 + phi / 2));
  return [x, y];
}
const path = d3.geoPath(projection); // for SVG
const path = d3.geoPath(projection, context); // for canvas