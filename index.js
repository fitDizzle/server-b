const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Server B');
});

app.listen(8080, () => {
  console.log('server B running on port 8080');
});