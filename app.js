const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Region 1 or Region 2'));

app.listen(80, () => console.log('App running on port 80'));

