const express = require('express');
const indexRoute = require('./routes/index');


const port = process.env.PORT || 8989;
const app = express()

app.set('view engine', 'ejs')

app.use(indexRoute)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
