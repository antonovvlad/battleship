// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});