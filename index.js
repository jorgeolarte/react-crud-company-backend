const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const companies = require("./api/routes/companies");

const app = express();

app.use(express.json({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/companies", companies);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

// const cors = require("cors");
// app.use(cors());
// module.exports = app;
