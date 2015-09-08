const tagRE = (tag) => (
  '<!--' +
    '\\s*@erase' +
    `\\s+${tag}` +
  '\\s*-->'
);

const betweenTags = new RegExp(
  tagRE('start') +
  '(.+?)' +
  tagRE('end'),
  'g'
);

export default (input) => (
  String(input).replace(betweenTags, '$1')
);
