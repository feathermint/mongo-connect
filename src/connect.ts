import * as logger from "@feathermint/logger";
import type { MongoClientOptions } from "mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";

const log = logger.create("mongodb");

export async function connect(
  url = "mongodb://localhost:27017",
  options: MongoClientOptions = {
    w: "majority",
    retryWrites: true,
    serverApi: ServerApiVersion.v1,
  },
): Promise<MongoClient> {
  let safeURL = url;
  if (url.indexOf("@") != -1) {
    const scheme = url.slice(0, url.indexOf("/") + 2);
    safeURL = `${scheme}username:password${url.slice(url.indexOf("@"))}`;
  }
  log.info(`Connecting to ${safeURL}.`);

  const client = new MongoClient(url, options);
  try {
    await client.connect();
  } catch (cause) {
    throw new Error("mongodb: failed to connect", { cause });
  }

  try {
    await client.db("admin").command({ ping: 1 });
  } catch (cause) {
    throw new Error("mongodb: failed to verify connection", { cause });
  }
  log.info("Connection established and verified.");

  return client;
}
