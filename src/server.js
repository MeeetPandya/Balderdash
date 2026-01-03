import express from "express";
import http from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
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
