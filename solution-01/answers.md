# Answers

> 1. In which scenarios does your implementation perform best? (e.g. high/low number of surfaces, points, fast loading or fast clicking, etc.)

My "naive" implemention can load and add fast, but finding is slow.

Loading and adding are fast because of the assumption that 'load' can overwrite the previous data, and that 'add' does not need check if there is already an interval with the new interval's id. (I.e., by assuming that ids do not have to be unique.)

Finding is slow because every 'find' traverses the entire unordered data set in order to locate possible candidates. Given there are a million of them, the operation can be slow.


> 2. Could your solution be extended to deal with two-dimensional intervals (rectangles) on a plane? This would be solving the problem for web pages, for example.

Yes. I can think of a couple of ways this could work.

- A separate interval store could be created for the x and y axes. Since both are just number lines, no modifications would really need to be made.

- We could create a IntervalStore2D that knows how to accept intervals of the form [id, x, xlen, y, ylen, z]. The interval store would compute clicks by filtering for matches along one axis, then finding matches on the other axis from that subset, then selecting the winner using the z-index.


> 3. Could you describe some other solutions to this problem? Where do they work best? Do they extend to two dimensions as well?

- One solution would be to have 'load' and 'add' do a lot more work initially. These methods could create lookup tables that make 'find' go faster. For example, it could group the intervals by starting point range. Or, these methods could possibly sort the intervals by endpoint so that a binary search could be performed. This could also extend to two dimensions but require more computation.
