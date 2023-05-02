const express = require('express')
const cors = require ('cors')

const app = express();
const port = process.env.port || 4000;
const chef = require('./chef.json');
app.use(cors())
app.get('/chef', (req, res) => {
    res.send(chef);
})
app.listen(port, () => {
    console.log(`running on port:${port}`);

})