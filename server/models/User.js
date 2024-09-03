const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  userType: String,
  shortId: {
    type: Number,
    unique: true
  }
});

UserSchema.pre('save', function(next) {
  if (this.isNew) {
    // Generate a short numeric ID based on the current timestamp
    this.shortId = Math.floor(Math.random() * 1000000); // Simple random number
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
