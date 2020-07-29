const express = require('express')
const app = express()

app.get('/w', (req, res) => res.send('Hello World!'))


app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))
