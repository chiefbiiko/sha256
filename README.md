# sha256

[![Travis](http://img.shields.io/travis/chiefbiiko/sha256.svg?style=flat)](http://travis-ci.org/chiefbiiko/sha256) [![AppVeyor](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/sha256?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/sha256)

SHA2-256 for [`deno`](https://deno.land).

## Usage

``` ts
import { sha256 } from "https://denopkg.com/chiefbiiko/sha256/mod.ts";

console.log('SHA2-256 of ""', sha256(""))
```

## API

#### `new SHA256()`

Creates a new SHA2-256 instance.

#### `SHA256#init(): SHA256`

Initializes a hash instance.

#### `SHA256#update(msg?: string | Uint8Array, inputEncoding?: string): SHA256`

Updates a hash with additional data. `inputEncoding` can be one of `"utf8"`, `"hex"`, or `"base64"`.

#### `SHA256#digest(outputEncoding?: string): string | Uint8Array`

Finalizes the hash. `outputEncoding` can be one of `"utf8"`, `"hex"`, or `"base64"`. If it is omitted a `Uint8Array` is returned.

#### `sha256(msg: string | Uint8Array, inputEncoding?: string, outputEncoding?: string,): Uint8Array`

Convenience function for hashing singular data.

## License

[MIT](./LICENSE)
