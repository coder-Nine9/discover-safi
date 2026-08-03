const express = require("express");
const cors = require("cors");

const app = express();

const clientsRoutes = require("./routes/clients");

app.use(cors());
app.use(express.json());

app.use("/clients", clientsRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});