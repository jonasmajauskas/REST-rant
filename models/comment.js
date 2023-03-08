//Define comment model
const mongoose = require('mongoose')
const { Schema } = mongoose;

let commentSchema = new Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('Comment', commentSchema)