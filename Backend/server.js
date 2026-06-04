require("dotenv").config();
const app = require("./src/app");
const connectingDb = require("./src/config/db");

const PORT = process.env.PORT || 5000;

// Database Connection
connectingDb();

app.listen(PORT, () => {
  console.log(`server is running on this ${PORT}`);
});
