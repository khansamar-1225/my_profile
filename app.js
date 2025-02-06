const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

// Serve static files (like images and CSS)
app.use(express.static(path.join(__dirname, "public")));

// Home Page Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// My Profile Page Route
app.get("/my_profile", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "_profile.html"));
});

// Start Server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
