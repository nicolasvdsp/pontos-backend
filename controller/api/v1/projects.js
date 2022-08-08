const Project = require('../../../models/api/v1/Project');
const _ = require('lodash');
const { checkIfPropertiesNotEmpty } = require('../../../pontos_modules/pontos');


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
        
        let errorfeedback = checkIfPropertiesNotEmpty(project);

        await project.save((err) => {
            if(err) {
                if(err.code==11000){
                    res.status(400).json({
                        status: 'error',
                        message: 'A project with this name already exists.'
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
        res.status(400).json({
            "status": "error",
            "message": "Something went wrong."
        })
    }
}

module.exports = {
    getAll,
    getProject,
    create
}