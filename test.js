import erase from './module';

const test = require('tape-catch');

test('Takes pairs of tags', (is) => {
  const single = {
    actual: erase('A <!-- @erase start -->B <!-- @erase end -->C'),
    expected: 'A C',
  };

  is.equal(single.actual, single.expected,
    'a single pair'
  );

  const more = {
    actual: erase(
      'A <!-- @erase start -->B <!-- @erase end -->' +
      'C <!-- @erase start -->D <!-- @erase end -->E'
    ),
    expected: 'A C E',
  };

  is.equal(more.actual, more.expected,
    'more than one pair'
  );

  const newline = {
    actual: erase('A\n<!-- @erase start -->B\n<!-- @erase end -->C\n'),
    expected: 'A\nC\n',
  };

  is.equal(newline.actual, newline.expected,
    'doesn’t fear newlines'
  );

  is.end();
});

test('Ignores whitespace within a tag', (is) => {
  const weird = {
    actual: erase('A <!--@erase\tstart\n   \n-->B <!--   \t   @erase\nend-->C'),
    expected: 'A C',
  };

  is.equal(weird.actual, weird.expected,
    'in the weirdest of cases'
  );

  is.end();
});

test('Takes unpaired tags', (is) => {
  const start = {
    actual: erase('A<!-- @erase start --> B'),
    expected: 'A',
  };

  is.equal(start.actual, start.expected,
    'at the beginning'
  );

  const end = {
    actual: erase('A <!-- @erase end -->B'),
    expected: 'B',
  };

  is.equal(end.actual, end.expected,
    'at the end'
  );

  const startAndEnd = {
    actual: erase('A <!-- @erase end -->B<!-- @erase start --> C'),
    expected: 'B',
  };

  is.equal(startAndEnd.actual, startAndEnd.expected,
    'at the beginning and at the end'
  );

  const mixed = {
    actual: erase(
      'A <!-- @erase end -->' +
      'B ' +
      '<!-- @erase start -->C <!-- @erase end -->' +
      'D' +
      '<!-- @erase start --> E'
    ),
    expected: 'B D',
  };

  is.equal(mixed.actual, mixed.expected,
    'together with paired tags'
  );

  is.end();
});
