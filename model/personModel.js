const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    name:{type: 'string', required: true}
})
const person = mongoose.model('person', personSchema);
module.exports = person;
