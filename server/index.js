const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
// middleware
app.use(cors())
app.use(express.json()) //req.body

// register and login routes
app.use("/auth", require("./routes/jwtAuth.js"))

app.use("/userinfo", require("./routes/userinfo"))

app.use("/group", require("./routes/groups"))

app.listen(5000, () => {
  console.log(`Server listening on port 5000`)
})
