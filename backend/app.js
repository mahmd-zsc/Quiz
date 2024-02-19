let express = require("express");

let app = express();
let { connectDB } = require("./config/connectDB");
let dotenv = require("dotenv");
dotenv.config({ path: ".env" });
connectDB();

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => console.log("the app has been run......"));
