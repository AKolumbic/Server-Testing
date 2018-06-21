const express = require('express');
const mongoose = require('mongoose');
const localHost = 'localhost:27017';
const database = 'blizzdb';
const server = express();
const port = process.env.PORT || 5005;

mongoose
    .connect(`mongodb://${localHost}/${database}`)
    .then(response => {
        console.log("Connection Successful")
    })
    .catch(error => {
        console.log("Connection Failed")
    });

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

  server.listen(port, () => {
      console.log(`\n=== API up on port: ${port} ===\n`)
});

module.exports = server;