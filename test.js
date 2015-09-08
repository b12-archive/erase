const test = require('tape-catch');

test('Takes pairs of tags', (is) => {
  const single = {
    actual: erase('a<!-- @erase start -->b<!-- @erase end -->c'),
    expected: 'ac',
  };

  is.equal(single.actual, single.expected,
    'a single pair'
  );

  const more = {
    actual: erase(
      'a<!-- @erase start -->b<!-- @erase end -->' +
      'c<!-- @erase start -->d<!-- @erase end -->e'
    ),
    expected: 'ace',
  };

  is.equal(more.actual, more.expected,
    'more than one pair'
  );

  const newline = {
    actual: erase('a\n<!-- @erase start -->b\n<!-- @erase end -->c\n'),
    expected: 'a\nc\n',
  };

  is.equal(newline.actual, newline.expected,
    'doesn’t fear newlines'
  );
});

test.skip('Ignores whitespace within a tag', (is) => {
  const aaa = {
    actual: erase('<!-- @erase start --><!-- @erase end -->'),
    expected: '',
  };

  is.equal(aaa.actual, aaa.expected,
    'in the weirdest of cases'
  );
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
});
