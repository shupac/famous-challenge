/**
 * IntervalStore represents a collection of intervals of the form
 *   [id, x, len, z], where `id` is the interval's identifier,
 *   `x` is an value along the number line, `len` is the length
 *   of the interval, and `z` is the z-index of the interval.
 *
 * @class IntervalStore
 * @constructor
 */
function IntervalStore() {
  if (!this instanceof IntervalStore) return new IntervalStore();

  this.data = [];
}

/**
 * Load a collection of interval objects. The collection should be
 *   an array of arrays. Each element should take the form [id, x, length, z].
 *
 * @method load
 * @param {Array.Array} data Array of interval arrays
 * @return {IntervalStore} this
 */
IntervalStore.prototype.load = function(data) {
  this.data = data;

  return this;
};

/**
 * Create and add a single interval to the collection.
 *
 * @method add
 * @param {Integer} id Id of the interval
 * @param {Integer} x Left endpoint of the interval
 * @param {Integer} len Length of the interval
 * @param {Integer} z Z-index of the interval
 * @return {IntervalStore} this
 */
IntervalStore.prototype.add = function(id, x, len, z) {
  this.data.push([id, x, len, z]);

  return this;
};

/**
 * Return the interval object that matches the given point x.
 *   A matched interval is the interval with the highest z-index
 *   among those that contain the point x. If multiple matches are
 *   found with the same z-index, return the first. If none are
 *   found, return an empty object.
 *
 * @method find
 * @param {Integer} x Point along the number line
 * @return {Object}
 */
IntervalStore.prototype.find = function(x) {
  var data = this.data;
  var length = data.length;

  // If the data set is empty, return empty immediately.
  if (length < 1) return {};

  // 'candidates' are any interval that contains the click.
  var candidates = [];

  for (var i = 0; i < length; i++) {
    var interval = data[i];

    var id  = interval[0]; // Interval id.
    var a   = interval[1]; // Left endpoint.
    var len = interval[2]; // Interval length.
    var b   = a + len - 1; // Right endpoint.
    var z   = interval[3]; // Z-index.

    // 'x' is a hit if it is contained within the interval.
    if (x >= a && x <= b) {
      candidates.push(interval);
    }
  }

  var clength = candidates.length;

  // If no 'candidates' were found, return empty.
  if (clength < 1) return {};

  // 'max' is the 'candidate' with the greatest z-index.
  var max = candidates[0];

  for (var i = 0; i < clength; i++) {
    var interval = candidates[i];

    var champion = max[3]; // Z-index
    var contender = interval[3]; // Z-index

    if (contender > champion) {
      max = interval;
    }
  }

  return {
    id:  max[0],
    x:   max[1],
    len: max[2],
    z:   max[3]
  };
};

// Export if running server-side.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IntervalStore;
}
