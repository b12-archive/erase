const tagRE = (tag) => (
  '<!--' +
    '\\s*@erase' +
    `\\s+${tag}` +
  '\\s*-->'
);

const unwanted = new RegExp(
  tagRE('start') +
  '[^]+?' +
  `(?:${tagRE('end')}|$)`,

  'g'
);

export default (input) => (
  String(input).replace(unwanted, '')
);
