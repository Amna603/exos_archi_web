let express = require('express');
let router = express.Router();

// Import destination controller
const destinationController = require('./controllers/destinationController');
const agenceController = require('./controllers/agenceController');
const tripController = require('./controllers/tripController');

router.get('/', (req, res) => res.redirect('/destination'));
router.get('/destination', destinationController.destinationList);
router.post('/destination/add', destinationController.destinationCreate);
router.put('/destination/:name',destinationController.destinationUpdate);
router.delete('/delDestination/:name', destinationController.destinationDelete);

//router.put('/destination/:destination_id', destinationController.destinationUpdate);

/*  ---------------------------------------------------------------- */

router.get('/agence', agenceController.agenceList);
router.post('/agence/add', agenceController.agenceCreate)
router.delete('/delAgence/:name', agenceController.agenceDelete);

//router.put('/agence/:agence_id', agenceController.agenceUpdate);
//router.get('/agence/:name', agenceController.agenceFindOne)

//router.get('/agence/find/:agence_id', agenceController.agenceFindOne)

module.exports = router;