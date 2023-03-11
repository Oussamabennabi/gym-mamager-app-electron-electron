const path = require("path");
const DATA_PATH = `${path.join(__dirname, "/data/members/members.json")}`;
const UPLOAD_DIR = "./data/photos";

module.exports = {
  DATA_PATH,
  UPLOAD_DIR,
};
