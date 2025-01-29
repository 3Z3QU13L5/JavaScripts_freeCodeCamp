// Requiring module
const express = require('express');
const homepage = require('./')

// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is running on this server')
    res.end()
})

// Port Number
const PORT = process.env.PORT || 5000;

// Serve Setup
app.listen(PORT, pyramidGenerator);
// Investigate how to display homepage