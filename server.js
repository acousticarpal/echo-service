const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(`${new Date().toISOString()} : Returning Date() in JSON Format`);
  res.json({
    date: new Date().toISOString(),
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})