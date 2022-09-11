const express = require("express")
const path = require("path")
const app = express()

// style files loaded
app.use(express.static(path.join(__dirname, '../frontend')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// routes 
const MainRouter = require("../backend/routes/main")
const UserRouter = require("../backend/routes/user")

app.use("/", MainRouter)
app.use("/user", UserRouter)

app.listen(process.env.PORT, () => console.log("Server Started"))