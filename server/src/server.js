const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001; // You can change the port if needed

app.use(cors());
app.use(express.json());

app.post('/api/search', (req, res) => {
  const { source, destination, date } = req.body;
  const dummyResponse = {
    source,
    destination,
    date,
    results: [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      { id: 3, name: 'Result 3' },
    ],
  };

  res.json(dummyResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
