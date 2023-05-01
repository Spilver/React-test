const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });


app.listen(8000, () => {
    console.log("servidor esta corriendo en puerto 8000");
});