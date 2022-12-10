const express = require('express');
const cors = require('cors');
const { readFile } = require('fs').promises;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let data = [];

app.get('/api', async (req, res) => {
    try {
        const file = await readFile('./data.json', 'utf8');
        data = JSON.parse(file);
        res.json(data);
    } catch (err) {
        console.log(err);
    }
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);