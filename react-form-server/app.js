const server = require("express");
const app = server();
const port = process.env.PORT || 3001;
const loginRouter = require("./routes/route.login.js");
const cors = require("cors");

app.use(cors());

app.use(server.json());
app.use("/api", loginRouter);

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
