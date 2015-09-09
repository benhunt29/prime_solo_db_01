var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
    username: { type: String, required: true},
    bookTitle: { type: String, required: true },
    bookAuthor: {type: String, required: true},
    email: { type: String, required: true}
});

module.exports = mongoose.model('Book',BookSchema);