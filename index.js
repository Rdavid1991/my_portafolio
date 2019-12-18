const express = require("express");
const path = require("path");



const router = express.Router();

const app = express();

app.set("port", 3000 || process.env.PORT);

app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
    res.sendFile(path.join(app.get("views"), "index.html"));
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(router);
app.listen(app.get("port"), () => {
    console.log("runing in port " + app.get("port"));
});