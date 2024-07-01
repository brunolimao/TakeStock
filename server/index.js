const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({
  extended: false,
}));

app.use(cors({credentials: true, origin: '*'}));

// Connection to the database
const sequelize = require("./models/index.js")
sequelize
 .authenticate()
 .then(() => console.log("Connection has been established successfully."))
 .catch((err) => console.error("Unable to connect to the database:", err));

// Routers
const stockRouter = require('./routes/Stocks.js');
app.use("/stocks", stockRouter);

const productRouter = require('./routes/Products');
app.use("/products", productRouter);

const inviteRouter = require('./routes/Invites');
app.use("/invites", inviteRouter);

const userRouter = require('./routes/Users');
app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("Server started on port 3001 : http://localhost:3001");
});