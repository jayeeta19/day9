// const express = require("express");
// const app = express ();

// app.get("/", (req, res) => {
// res.send("Hello World");
// });

// app.get("/date", (req, res) => {
// res.send(new Date().toString());
// });

// app.use((req, res) => {
// res.status(404).send("Page not found");
// });

// const PORT = 3000;
// app. listen(PORT, () => {
// console. log(`Server is running on port http://localhost:${PORT}`);
// });
const express = require("express") ;
const mongoose = require("mongoose");
const cors = require("cors");

const app = express ();
const PORT = 5001;

app.use(express.json());
app.use(cors());

mongoose
.connect (
"mongodb+srv://jayeeta2005:admin@cluster0.7jfjp.mongodb.net/?retryWrites=true&w=majority&appName=cluster0",
  {}
)
.then ( () => {
console.log("Connected to the database of GCC");
});

// Routes
const userRoute = require("./routes/user.route");
const todoRoute=require("./routes/todo.route");
app.use("/user", userRoute);
app.use("/todo",todoRoute);

app.get("/", (req, res) => {
res.send("Hello Chhota Don");
});
app. listen(PORT, ()=>{
  console.log(`Server is running on port http://localhost:${PORT}`);
})
