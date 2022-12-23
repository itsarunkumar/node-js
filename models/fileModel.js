// schema for storing file information and path

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var fileSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

var File = mongoose.model("File", fileSchema);

module.exports = File;
