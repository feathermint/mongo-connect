# @feathermint/mongo-connect

Utility function to establish and verify a connection to MongoDB.

## Installation

Install the package with:

```
npm install @feathermint/mongo-connect
```

## Usage

```
import * as mongodb from "@feathermint/mongo-connect";

async function client(url, options) {
    return await mongodb.connect(url, options);
}
```
