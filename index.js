const express = require("express");
const app = express();
const companies = require("./api/companies");

app.use(express.json({ extended: false }));

app.use("/api/companies", companies);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const port = 3000;

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(cors());

// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// app.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// module.exports = app;
