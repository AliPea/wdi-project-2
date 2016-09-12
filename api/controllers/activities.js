module.exports = {
  index:  activitiesIndex,
  show:   activitiesShow,
  create: activitiesCreate,
  update: activitiesUpdate,
  delete: activitiesDelete
};

const Activity = require("../models/activity");

function activitiesIndex(req, res){
  Activity.find({}, (err, activities) => {
    if (err) return res.status(500).json({
      message: "Something went wrong."});
      return res.status(200).json({ activities });
    });
}
 function activitiesShow(req, res){
   Activity.findById(req.params.id, (err, activity) => {
     if (err) return res.status(500).json({
       message: "Something went wrong." });
       if (!activity) return res.status(404).json({ message: "No activity was found."});
       return res.status(200).json({ activity });
   });
 }

 function activitiesCreate(req, res){
   Activity.create(req.body.activity, (err, activity) => {
     if (err) return res.status(500).json({
       message: "Something went wrong"});
       return res.status(201).json({ activity });
     });
 }

function activitiesUpdate(req, res) {
  Activity.findByIdAndUpdate(req.params.id, req.body.restaurant, { new: true }, (err, activity) => {
      if (err) return res.status(500).json({
        message: "Something went wrong."
      });
      return res.status(200).json({ activity });
    });
}

function activitiesDelete(req, res){
  Activity.findByAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({
      message: "Something went wrong." });
      return res.status(204).json({ message: "Deleted."});
    });
}
