[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/erase.svg?style=flat-square)
](https://coveralls.io/r/studio-b12/erase)
 [![Travis – build status
](https://img.shields.io/travis/studio-b12/erase/master.svg?style=flat-square)
](https://travis-ci.org/studio-b12/erase)
 [![David – status of dependencies
](https://img.shields.io/david/studio-b12/erase.svg?style=flat-square)
](https://david-dm.org/studio-b12/erase)
 [![Stability: stable
](https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




<div                                                         id="/">&nbsp;</div>

erase
=====

**Remove part of a markdown/HTML document.**




<p align="center"><a
  title="Graphic by the great Justin Mezzell"
  href="http://justinmezzell.tumblr.com/post/95370140878"
  >
  <br/>
  <br/>
  <img
    src="Readme/Scissors.gif"
    width="400"
    height="300"
  />
  <br/>
  <br/>
</a></p>




<div                                             id="/installation">&nbsp;</div>

Installation
------------

```sh
$ npm install erase
```




<div                                                    id="/usage">&nbsp;</div>

Usage
-----

```js
const erase = require('erase');

const readme =
`# Got a readme here

<!-- @erase start -->I’ve got some irrelevant stuff there, but I hope that
<!-- @erase end -->most of it is quite important.
`;

erase(readme);
//» # Got a readme here
//
//  most of it is quite important.
```

Anything between the markers `<!-- @erase start -->` and `<!-- @erase end -->` will be removed from your string. You can have as much whitespace within your marker as you want. Both the start marker and the end marker are optional, but we need at least one of them to erase anything from your input.



<div                                                  id="/license">&nbsp;</div>

License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
