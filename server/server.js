const express = require('express')
const app = express()

app.get("/api", (req, res) => {
  res.json({ "message": ["Hello from server.js! (the app.get localhost/5000/api route)"] })
})

app.listen(5000, () => { console.log("Server started on port 5000") })