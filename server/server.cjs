const path = require('path');
const express = require('express');
const cors = require('cors'); // Import the cors package
const router = require('./routes/router.cjs');

const { PORT = 3001 } = process.env;

const app = express();

// Use CORS middleware to allow requests from any origin
app.use(cors());

// Middleware that parses JSON and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
