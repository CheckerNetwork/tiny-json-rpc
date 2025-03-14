# tiny-json-rpc

A tiny JSON RPC client

## Usage

```js
import { createJsonRpcClient } from 'tiny-json-rpc'

const rpc = createJsonRpcClient('http://example.com/api')

const result = rpc.call('add', [1, 2])
console.log(result)
// Output: 3
```

Authorize requests using an access token:

```js
const rpc = createJsonRpcClient('http://example.com/api', {
  requestHeaders: {
    authorization: 'Bearer <access_token>',
  },
})
```
