const express = require("express")
const path = require("path")
const app = express()

// style files loaded
app.use(express.static(path.join(__dirname)));
app.use(express.static('../'));

// routes 

const MainRouter = require("../backend/routes/main")
const UserRouter = require("../backend/routes/user")

app.use("/", MainRouter)
app.use("/user", UserRouter)

app.listen(3000, () => console.log("Server Started"))
