import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { Server } from "socket.io";
import jwt from "jsonwebtoken";

const app = express();
const server = createServer(app);
const io = new Server(server);

const _dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(_dirname, "index.html"))
  res.send("Balderdash Server is running!");
});

// app.post("/auth/guest", async(req, res) => {
//   const {name} = req.body;

//   if (!name || name.trim() === "") {
//     return res.status(400).json({error: "Name is required"});
// }
//   const nameToken = )

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
