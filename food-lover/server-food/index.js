const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 6002;

// middleware
app.use(cors());
app.use(express.json());

// for mongodb

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.54rjrr8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const foodCollection = client.db("storeDB").collection("foods");

    // create food item

    app.post("/foods", async (req, res) => {
      const newFoodItem = req.body;
      const result = await foodCollection.insertOne(newFoodItem);
      res.send(result);
    });

    // read foods
    app.get("/foods", async (req, res) => {
      const cursor = foodCollection.find();
      const result = await cursor.toArray();
      res.send(result);
      // res.send("Foods");
    });
    // read single food
    app.get("/foods/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await foodCollection.findOne(query);
      res.send(result);
    });
    // update food item
    app.put("/foods/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateFood = req.body;
      const updatedDoc = {
        $set: {
          ...updateFood,
        },
      };
      const result = await foodCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // delete food item

    app.delete("/foods/:id", async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await foodCollection.deleteOne(query);
        console.log(result);
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// test
app.get("/", (req, res) => {
  // console.log('Hello vai')
  res.send("Hello vai");
});

app.listen(port, () => {
  console.log("Server is Running On Port: ");
});
