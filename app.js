const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 8000;

// So our app can parse JSON data
app.use(express.json());

app.get('/', (req, res) => {
  res.send("My simple API!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));