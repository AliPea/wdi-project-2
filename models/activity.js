const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name:        { type: String, trim: true, required: true },
  image:       { type: String, trim: true, required: true },
  distance:    { type: String, trim: true },
  description: { type: String, trim: true },
  information: { type: String, trim: true },
  lat:         { type: String, time: true, required: true },
  lng:         { type: String, time: true, required: true },
  type:        { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model("Activity", activitySchema);

//when click on heart

// let favorite = {
//   name: activity.name,
//   ...
// };
//
// user.favorite.push(favorite);
