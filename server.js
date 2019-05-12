const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname,'data', 'products.json'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));
