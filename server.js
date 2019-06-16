/**
 * This script starts a simple ExpressJS static server
 */
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('build'));
app.listen(port, () => console.log(`Listening on port ${port}!`))
