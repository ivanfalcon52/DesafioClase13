const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(`mongodb+srv://ivanfalcon52:<Dangerous52>@ivanf.unxtpmi.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=IvanF`)
    .then(() => console.log("Connected database"))
    .catch((error) => console.error("Error Establishing a Database Connection", error))