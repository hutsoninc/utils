# utils

[![Build Status](https://travis-ci.com/hutsoninc/utils.svg?branch=master)](https://travis-ci.com/hutsoninc/utils) [![Current npm package version](https://img.shields.io/npm/v/@hutsoninc/utils.svg)](https://www.npmjs.com/package/@hutsoninc/utils) 

Hutson marketing team utility belt. Used for prototyping and creating one-off tools and scripts.

## Usage

`npm install @hutsoninc/utils`

```js
const {
    csvToJson,
} = require('@hutsoninc/utils')

const csv = 'id\n1\n2'

await csvToJson(csv)
// => [{id: 1}, {id: 2}]
```

### API

#### csvToJson

Converts a CSV string to a JavaScript object.

```js
const csv = 'id\n1\n2'

await csvToJson(csv)
// => [{id: 1}, {id: 2}]
```

#### delay

Asynchronous function to wait for a specified amount of time in ms.

```js
await delay(3000)
// Resolves after 3000ms (3 seconds)
```

#### jsonToCsv

Converts a JavaScript object to a CSV string.

```js
const obj = [{ id: 1 }, { id: 2 }]

jsonToCsv(obj, ['id'])
// => 'id\n1\n2'
```

#### xmlToJson

Converts a XML string to a JavaScript object.

```js
const xml = '<root>Hello World</root>'

await xmlToJson(xml)
// => { root: 'Hello World' }
```

## License

MIT © [Hutson Inc](https://www.hutsoninc.com)
