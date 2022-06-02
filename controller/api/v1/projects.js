const Project = require('../../../models/api/v1/Project');


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
    project.title = "NMBS app",
    project.description = "Redesigning the NMBS app",
    project.picture = "https://via.placeholder.com/150",
    project.tags = "ux, ui",
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