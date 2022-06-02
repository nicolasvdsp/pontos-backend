const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    picture: {type: String, required: true},
    tags: {type: String, required: false},
    link: {type: String, required: false},
});
const Project = mongoose.model('Project', projectSchema);


const getAll = async (req, res) => {
    let projects = await Project.find();
    res.json({
        "status": "success",
        "data": {
            "projects": projects
        }
    });
}

const create = async (req, res) => {
    let project = new Project();
    project.title = "Smash mental support",
    project.description = "Supporting my sidebitches",
    project.picture = "https://via.placeholder.com/150",
    project.tags = "nojejs",
    project.link = "www.google.be"
    let newProject = await project.save()

    res.json({
        "status": "success",
        "data": {
            "project": newProject
        }
    });
}

module.exports = {
    getAll,
    create
}