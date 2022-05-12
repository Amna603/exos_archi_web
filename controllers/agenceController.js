const db = require('../models/index');
const Agence = db.Agence;
const Destination = db.Destination;
const Trip = db.Trip

exports.agenceList = async function (req, res) {
    await Agence.findAll({ attributes: ['name', 'adress', 'telephone', 'email', 'openingHours', 'touristDestinations' ] })
        .then(data => {
            console.log("All Agences:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.agenceCreate = async (req, res) => {
    let agence = Agence.build({ name: req.body.name, adress: req.body.adress, telephone: req.body.telephone, email: req.body.email, openingHours: req.body.openingHours, touristDestinations:req.body.touristDestinations})
    await agence.save()
        .then(data => {
            console.log(agence.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    // or Destination.create in one time
}


exports.agenceDelete = async function (req, res) {
    if (req.params.name) {
        await Agence.destroy({ where: { name: req.params.name } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}



exports.agenceUpdate = async function (req, res) {
    if (req.params.Agence_id > 0) {
        await Agence.update(
            { name: req.body.name }, 
            { where: { name: req.params.name } }
            )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}

