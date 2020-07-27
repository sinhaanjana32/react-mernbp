const express = require("express");
const app = express();


 const mongoose = require("mongoose");
mongoose
 .connect('mongodb+srv://reactmern:reactmern@cluster0.drwup.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
 .then(() => console.log("DB connected"))
 .catch(err => console.error(err));





app.get("/", (req, res) => {
    res.send('hello worldddd')
  });




const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});