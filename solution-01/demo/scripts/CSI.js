// CSI: Comma-separated integers

CSI = {
  // Take a CSV-ish string whose values we know are integers.
  // Parse it, returning an array of rows, with each row an
  // array whose values are the contents of each cell. No matter
  // the cell value, convert it to an integer.
  parse: function(str) {
    var rows = str.split('\n');

    // Exclude trailing newline.
    var last = rows[rows.length - 1];
    if (last === "") rows.pop();

    for (var i = 0, l1 = rows.length; i < l1; i++) {
      var cells = rows[i].split(',');

      for (var j = 0, l2 = cells.length; j < l2; j++) {
        cells[j] = parseInt(cells[j]);
      }

      rows[i] = cells;
    }

    return rows;
  }
};

// Export if running server-side.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CSI;
}
