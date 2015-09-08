const tagRE = (tag) => (
  '<!--' +
    '\\s*@erase' +
    `\\s+${tag}` +
  '\\s*-->'
);

const pairedOrLoneStart = new RegExp(
  tagRE('start') +
  '[^]+?' +
  `(?:${tagRE('end')}|$)`,
  'g'
);

const loneEnd = new RegExp(
  '^' +
  '[^]+?' +
  tagRE('end'),
  'g'
);

export default (input) => (
  String(input)
    .replace(pairedOrLoneStart, '')
    .replace(loneEnd, '')
);
