require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`> Listening in port ${PORT}`);
});
