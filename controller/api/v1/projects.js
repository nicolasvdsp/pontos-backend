const Project = require('../../../models/api/v1/Project');
const _ = require('lodash');


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

const getProject = async (req, res) => {
    try {
        const key = req.params.key;
        const result = await Project.findOne(
            {key: key}
        )
        if(result===null){
            throw null;
        }
        
        res.json({
            "status": "success",
            "data": {
                "project": result
            }
        });
                
        
    } catch {
        const key = req.params.key;
        res.json({
            "status": "error",
            "message": `couldn't get project ${key}`
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
        project.key = _.camelCase(project.title);
        
        // construct errors per parameter when empty, for response to frontend
        let errorfeedback = {};
        if (project.title === '') {
            errorfeedback.title = 'A title would look great on this project!';
        }
        if (project.description === '') {
            errorfeedback.description = 'Without description nobody\'ll know what\'s up.';
        }
        if (project.picture === '') {
            errorfeedback.picture = "Am I blind or are there no pictures uploaded?";
        }
        if (project.tags === '') {
            errorfeedback.tags = "Throw at least one tag in the party will ya?";
        }
        if (project.link === '') {
            errorfeedback.link = "Provide a link towards your project please";
        }

        await project.save((err) => {
            if(err) {
                if(err.code==11000){
                    res.json({
                        status: 'error',
                        message: 'Choose a project with another name'
                    });
                } else {
                    res.status(400).json({
                        status: 'error',
                        message: errorfeedback,
                        errormessage: err.message
                    })
                }

            } else {
                res.json({
                    "status": "success",
                    "data": {
                        "project": project
                    }
                });
            }
        })
        
    }
    catch {
        res.json({
            "status": "error",
            "message": err.message
        })
    }
}

module.exports = {
    getAll,
    getProject,
    create
}