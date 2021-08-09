const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const transformData = require('./utils.js');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/cards', async (req, res) => {
  try {
    const { data } = await axios.get('https://mtgdraftking.com/data/M21.json');
    const transformedData = transformData(data);
    res.status(200).send(transformedData);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
