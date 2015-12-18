/**
 * Calculates the projection transform for the given d3.geo.path
 * to fit the given geometry features into the box  [0, 0, width, height].
 *
 * @param geoPath  Instance of d3.geo.path
 * @param features  GeoJSON features
 * @param width    {Number}
 * @param height   {Number}
 * @param padding  {Number} Padding in pixels
 * @returns {{scale: number, translate: *[]}}
 */

function fitTransform(geoPath, features, width, height, padding) {

  var bounds = geoPath.bounds(features),
      dx = bounds[1][0] - bounds[0][0],
      dy = bounds[1][1] - bounds[0][1],
      x = (bounds[0][0] + bounds[1][0]) / 2,
      y = (bounds[0][1] + bounds[1][1]) / 2,
      scale = (padding ? (1 - padding) : 1) / Math.max(dx / width, dy / height),
      translate = [width / 2 - scale * x, height / 2 - scale * y];

  return {
    scale: scale,
    translate: translate
  };

}

module.exports = fitTransform;
