const express = require('express');
const app = express();
const PORT = 3000;

//APIを作成
app.length('/', (req, res) => {
  res.send('Hello Express');
});

app.listen(PORT, () => {
  console.log('server is running on PORT' + PORT);
});
