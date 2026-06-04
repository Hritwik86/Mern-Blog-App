const mongoose = require("mongoose");

const connectingDb = async () => {
  try {
    const connectedSection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb Connected: ${connectedSection.connection.host}`);
  } catch (error) {
    console.error("Mongodb Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectingDb;
