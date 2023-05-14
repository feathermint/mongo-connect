# @feathermint/mongodb

Utility function to establish and verify a connection to MongoDB.

## Installation

Install the package with:

```
npm install @feathermint/mongodb
```

## Usage

```
import * as mongodb from "@feathermint/mongodb";

async function client(url, options) {
    return await mongodb.connect(url, options);
}
```
