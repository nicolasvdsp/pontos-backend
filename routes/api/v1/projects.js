var express = require('express');
var router = express.Router();
const projectsController = require('../../../controller/api/v1/projects')

router.get('/', projectsController.getAll);

router.post('/', projectsController.create);

module.exports = router;