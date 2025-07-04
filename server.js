
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from KRX AI!');
});

// Example route with parameter
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
