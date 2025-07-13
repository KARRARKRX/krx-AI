const express = require("express");
const app = express();
const chatRoute = require("./routes/chat");
const path = require("path");

app.use(express.json());
app.use(express.static("public"));
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));