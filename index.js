const express = require('express')

const app = express();
const port = process.env.port || 4000;
const chef = require('./chef.json');

app.get('/chef', (req, res) => {
    res.send(chef);
})
app.listen(port, () => {
    console.log(`running on port:${port}`);

})