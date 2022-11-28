const http = require("http");
const express = require("express");
// const { PrismaClient } = require("@prisma/client");
//const routes = require("./routes");
//express에서 미들웨어로 라우터 제공하며 routes폴더에 index.js에서 불러온걸 데려온 것.
// const express = require("express");
// const router = express.Router(); // router객체 불러옴.
const dotenv = require("dotenv");

// const prisma = new PrismaClient();
const app = express();

app.use(express.json());
//app.use(routes);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
