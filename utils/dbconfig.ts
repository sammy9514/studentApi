import { MongoClient } from "mongodb";

let url = "mongodb://127.0.0.1:27017";

export let client = new MongoClient(url);

const mainConnection = async () => {
  await client.connect();

  return "db is connected";
};

mainConnection()
  .then((res) => {
    console.log(res);
  })
  .catch(() => console.error())
  .finally(() => client.close());

export let db = client.db("student").collection("portal");
