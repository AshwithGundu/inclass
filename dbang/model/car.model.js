var mongoose =require('mongoose');

var userSchema =mongoose.Schema({

make: String,
model : String,
year : String,
type : String,
features : [String],
date : Date

});
module.exports =mongoose.model('Car',userSchema);
