const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello this is Manny\'s First Application! Let\'s try this again.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
