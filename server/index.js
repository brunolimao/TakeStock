const express = require("express");
const app = express();

app.use(express.json());

// Connection to the database
const sequelize = require("./models/index.js")
sequelize
 .authenticate()
 .then(() => console.log("Connection has been established successfully."))
 .catch((err) => console.error("Unable to connect to the database:", err));

// Routers
const stockRouter = require('./routes/stock/Stocks');
app.use("/stocks", stockRouter);

const productRouter = require('./routes/product/Products');
app.use("/products", productRouter);

const inviteRouter = require('./routes/invite/Invites');
app.use("/invites", inviteRouter);

const userRouter = require('./routes/user/Users');
app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("Server started on port 3001 : http://localhost:3001");
});