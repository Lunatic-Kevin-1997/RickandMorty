let favs = require('../utils/Fav')

const postFavs = (req, res) => {
    favs.push(req.body);
    res.status(201).json(favs); 
}

const getFavs = (req, res) => {
    res.status(200).json(favs); 
}

const deleteFavs = (req, res) => {
    const {id} = req.params;
    const favFiltered = favs.filter(char => parseInt(char.id) !== parseInt(id));
    favs = favFiltered;
    res.status(200).json(favs);
}

module.exports = {postFavs, getFavs, deleteFavs};