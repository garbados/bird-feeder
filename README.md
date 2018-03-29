# bird-feeder

[![Stability](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![npm version](https://img.shields.io/npm/v/bird-feeder.svg?style=flat-square)](https://www.npmjs.com/package/bird-feeder)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![Build Status](https://img.shields.io/travis/garbados/bird-feeder/master.svg?style=flat-square)](https://travis-ci.org/garbados/bird-feeder)
[![Coverage Status](https://img.shields.io/coveralls/github/garbados/bird-feeder.svg?style=flat-square)](https://coveralls.io/github/garbados/bird-feeder?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/garbados/bird-feeder.svg)](https://greenkeeper.io/)

An extremely basic self-hosted RSS reader.

Given an array of feed URLs, it collects the 20 most recent entries from each and concatenates them in order of publish date. It then renders some information about them in a static front page. By default, it reloads articles on each page load.

## Install

Download the source using [git](https://git-scm.com/) and install dependencies using [npm](http://npmjs.com/):

```bash
$ git clone garbados/bird-feeder
$ cd bird-feeder
$ npm install
```

Now edit `config.json` to contain the feed URLs you want to follow:

```
$ nano config.json
{
	"feedUrls": [
		"http://feeds.arstechnica.com/arstechnica/index",
		"https://garbados.github.io/my-blog/rss.xml"
	]
}
```

Now start the server:

```bash
$ npm start
Now listening on port 3000
```

You can also add the `bird-feeder` command to your `$PATH` with npm:

```bash
$ npm link
$ bird-feeder -h

bird-feeder

Start the feed server

Commands:
  bin.js start  Start the feed server                 [default] [aliases: serve]

Options:
  --version   Show version number                                      [boolean]
  --port, -p  Port for the server to listen on.                  [default: 3000]
  -h, --help  Show help                                                [boolean]
```

## Test

After installing dependencies, run the test suite with npm:

```bash
$ npm install
$ npm test
```

Here's a one-liner for checking test coverage:

```bash
$ npx nyc npm test
```

## Contributing

To report bugs or request features, file an [issue](https://github.com/garbados/bird-feeder/issues). If you want to merge code, file a [pull request](https://github.com/garbados/bird-feeder/pulls). I reserve sole discretion for the moderation of this project.

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
