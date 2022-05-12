const db = require('../models/index');
const Trip = db.Trip;

exports.addTrip = async function (req, res) {
    let trip = Trip.build({ destinationName: req.body.destinationName, agencyName: req.body.agencyName})
    await trip.save()
        .then(data => {
            console.log(trip.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    // or Destination.create in one time
}