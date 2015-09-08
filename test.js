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

test.skip('Takes unpaired tags', (is) => {
  const aaa = {
    actual: erase('<!-- @erase start --><!-- @erase end -->'),
    expected: '',
  };

  is.equal(aaa.actual, aaa.expected,
    'at the beginning'
  );

  const bbb = {
    actual: erase('<!-- @erase start --><!-- @erase end -->'),
    expected: '',
  };

  is.equal(bbb.actual, bbb.expected,
    'at the end'
  );

  const ccc = {
    actual: erase('<!-- @erase start --><!-- @erase end -->'),
    expected: '',
  };

  is.equal(ccc.actual, ccc.expected,
    'at the beginning and at the end'
  );

  const ddd = {
    actual: erase('<!-- @erase start --><!-- @erase end -->'),
    expected: '',
  };

  is.equal(ddd.actual, ddd.expected,
    'together with paired tags'
  );

  is.end();
});
