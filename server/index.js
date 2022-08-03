const express = require("express"); // Similar to import 'package:express/express.dart'
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const PORT = 3000;
const app = express(); // Initialising express
const DB = "mongodb+srv://kunalagrawal:Kunal2001@cluster0.dzeiu.mongodb.net/?retryWrites=true&w=majority"

// Creating an API
// http://<youripaddress>/hello-world
// app.get("/hello-world", (req, res) => {
//     res.send("hello world");
// });

// app.get("/", (req, res) => {
//     res.json({ "name": "Kunal" });
// })

// Middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose.connect(DB).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
}); // This binds itself with the host we will specify and listen for any other connections