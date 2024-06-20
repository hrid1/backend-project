const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();


const port = process.env.PORT || 6001;

// middleware
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.54rjrr8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const booksCollection = client.db("storeDB").collection('books');

    // ------------------------------for read all
    app.get('/books', async(req, res) => {
        const cursor = booksCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    //----------------------------- for create 
    app.post("/books", async(req, res) => {
        const newBook = req.body;
        console.log(newBook);
        const result = await booksCollection.insertOne(newBook);
        res.send(result);

    })
    // -----------------------------for finding one
    app.get('/books/:id', async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const book = await booksCollection.findOne(query);
        res.send(book);
    })


    // -----------------------------for update

    app.put('/books/:id', async(req, res)=> {
        const id = req.params.id;
        const filter = {_id : new ObjectId(id)};
        const options = {upsert : true}
        const updateBook = req.body;
        const updatedDoc = {
                $set: {
                    // title:updateBook.title,
                    // author: updateBook.author,
                    // genre:updateBook.genre,
                    // price:updateBook.price,
                    // stock:updateBook.stock
                    ...updateBook
                }
                
        };
        const result = await booksCollection.updateOne(filter, updatedDoc, options);
        res.send(result);
    })

    // ----------------------for delete

    app.delete("/books/:id", async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await booksCollection.deleteOne(query);
        console.log(result)
        res.send(result);
        
    })







    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// test
app.get('/', (req, res) => {
    res.send("Hello vai server is running ")
})




app.listen(port , () => {
    console.log(`Server is Running On port: http://localhost:${port}`)
})







