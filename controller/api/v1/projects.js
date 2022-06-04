const Project = require('../../../models/api/v1/Project');


const getAll = async (req, res) => {
    try {
        let projects = await Project.find();
        res.json({
            "status": "success",
            "data": {
                "projects": projects
            }
        });
    }
    catch {
        res.json({
            "status": "error",
            "message": "Couldn't get all your projects"
        });
    }
}

const create = async (req, res) => {
    try {

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
    catch {
        res.json({
            "status": "error",
            "message": "Couldn't create your project"
        })
    }
}

module.exports = {
    getAll,
    create
}