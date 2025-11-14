const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const MONGOURI = process.env.MONGOURI;
const PORT = process.env.PORT;

const app = express();

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));