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
    project.title = req.body.title;
    project.description = req.body.description;
    project.picture = req.body.picture;
    project.tags = req.body.tags;
    project.link = req.body.link;
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