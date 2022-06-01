
const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "projects": []
        }
    });
}

const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "project": {
                "title": "Smash mental support",
                "description": "Supporting my sidebitches",
                "picture": "https://via.placeholder.com/150",
                "tags": "ndoejs",
                "link": "www.google.be"
            }
        }
    });
}

module.exports = {
    getAll,
    create
}