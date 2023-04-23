const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 8000;

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// So our app can parse JSON data
app.use(express.json());

app.get('/', (res) => {
  res.send("My simple API!");
});

// Get product details
app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);

    res.json(JSON.parse(response));
  } catch (err) {
    res.json(err);
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));