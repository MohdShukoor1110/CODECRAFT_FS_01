const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./Routes/Auth");

require("dotenv").config();
const MONGOURI = process.env.MONGOURI;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Connected.")).catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));