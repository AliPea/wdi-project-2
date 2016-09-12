const mongoose = require("mongoose");
const config = require("../config/config");
const User = require("../models/user");


mongoose.connect(config.db);
