const { Router } = require('express');
const router = Router();

const controller = require('../controller/controller')

router.post('/fetchMeaningCloud', controller.fetchMeaningCloud)

module.exports = router;