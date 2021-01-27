const express = require('express');
const rootRouter = require('./routes');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(rootRouter);

app.get('/', (req, res) => {
    res.send('I am alive');
})

app.listen(port, () => {
    console.log(`server is app and running on port ${port}`);
})