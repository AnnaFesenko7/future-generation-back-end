const app = require("./src/app");
const mongoose = require("mongoose");
const { createFolder } = require("./src/helpers");
mongoose.set("strictQuery", true);
require("dotenv").config();
const path = require("path");

const { DB_HOST, PORT = 4040 } = process.env;

const UPLOAD_DIR = path.join(process.cwd(), process.env.UPLOAD_DIR);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      createFolder(UPLOAD_DIR);
      console.log(`Database connection successful on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
