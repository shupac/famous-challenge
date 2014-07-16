# solution-01

## Code

[demo/scripts](demo/scripts)

## Answers

[answers.md](answers.md)

## Result

* `node demo/server`
* Load [localhost:8080](http://localhost:8080) in your browser
* Open your JavaScript console

## Performance benchmarks

    node perf/index

    =>

    Data set size: 1000000 rows
    IntervalStore#load (+ ctor) x 19,470,556 ops/sec ±0.59% (98 runs sampled)
    IntervalStore#add x 1,874,267 ops/sec ±66.05% (35 runs sampled)
    IntervalStore#find x 0.17 ops/sec ±3.43% (5 runs sampled)

## Tests

    node test/index
