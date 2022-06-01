var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "projects": []
        }
    });
});

router.post('/', (req, res) => {
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
});

module.exports = router;