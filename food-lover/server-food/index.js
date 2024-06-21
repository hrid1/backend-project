const express = require('express')
const cors = require('cors')
const app = express();

const port = process.env.PORT ||  6002;
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    // console.log('Hello vai')
    res.send("Hello vai")
})

app.listen(port, () => {
    console.log("Server is Running On Port: ")
})