const db = require('../models/index');
const Destination = db.Destination;

exports.destinationList = async function (req, res) {
    await Destination.findAll({ attributes: ['name','description', 'containedInPlace', 'travelAgencies'] })
        .then(data => {
            console.log("All Destinations:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.destinationCreate = async function (req, res) {
    let destination = Destination.build({ name: req.body.name, containedInPlace: req.body.containedInPlace, description: req.body.description, travelAgencies: req.body.travelAgencies})
    await destination.save()
        .then(data => {
            console.log(destination.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    // or Destination.create in one time
}

exports.destinationUpdate = async function (req, res) {
    if (req.params.name) {
        await Destination.update(
            { name: req.body.name, containedInPlace: req.body.containedInPlace,  description: req.body.description, travelAgencies: req.body.travelAgencies },
            { where: { name: req.params.name } }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Destination not found' })
}

exports.destinationDelete = async function (req, res) {
    if (req.params.name) {
        await Destination.destroy({ where: { name: req.params.name } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Destination not found' })
}

exports.destinationFindOne = async function (req, res) {
    if (req.params.name) {
        await Destination.findOne({ where: { name: req.params.name } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Destination not found' })
}

const { Op } = require("sequelize");
exports.destinationFindOp = async function (req, res) {
    await Destination.findAll({
        where: {
            name:
                { [Op.gt]: 2, [Op.lt]: 9 }
        }
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.destinationOrder = async function (req, res) {
    await Destination.findAll({ order: ['name'] })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}



