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
