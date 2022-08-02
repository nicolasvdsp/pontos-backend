const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    picture: {type: String, required: true},
    tags: {type: String, required: false},
    link: {type: String, required: false},
    key: {type: String, required: true}
});
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;