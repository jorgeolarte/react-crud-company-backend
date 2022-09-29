const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Companies = mongoose.model(
  "Company",
  new Schema({
    name: String,
    address: String,
    nit: String,
    phone: String,
  })
);

module.exports = Companies;
