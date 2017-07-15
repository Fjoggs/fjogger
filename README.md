# fjogger
Current build has a bug, working on fixing it
Barebones 'log-to-file' package for Javascript

## Usage

```js
import log from 'fjogger'

log('error', 'something went wrong');
```

logs to `'__dirname'/logs/log.txt`

## Frameworks used
- Ecmascript 6
- Jest

## Dev related frameworks
- Eslint with prettier config
- Babel

## CircleCI build status
[![CircleCI](https://circleci.com/gh/Fjoggs/flog/tree/master.svg?style=svg)](https://circleci.com/gh/Fjoggs/flog/tree/master)
