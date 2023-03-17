const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";
const getCharDetail = async (req, res) =>{
    try{
        const {detailId} = req.params;
        const response = await axios(URL + detailId);
        const data = response.data;

        const infoCharacter = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin?.name  
        }
        res.status(200).json(infoCharacter);
    }catch(error){
        res.status(404).send(error.message);
    }
    // const {detailId} = req.params;
    // axios(URL + detailId)
    // .then((response) =>{
    //     const character = {
    //         id: response.data.id,
    //         name: response.data.name,
    //         image: response.data.image,
    //         gender: response.data.gender,
    //         species: response.data.species,
    //         status: response.data.status,
    //         origin: response.data.origin?.name
    //     };
    //     res.status(200).json(character);
    // }, (error)=> res.status(500).json(error.message));
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    // .then(response => response.data)
    // .then(data =>{
    //     let character = {
    //         name: data.name,
    //         image: data.image,
    //         gender: data.gender,
    //         species: data.species,
    //         status: data.status,
    //         origin: data.origin.name
    //     }
    //     res.writeHead(200, {"Content-Type": "application/json"})
    //     .end(JSON.stringify(character));
    // })
    // .catch(error => res.writeHead(500, {"Content-Type": "text/plain"})
    // .end(`El personaje con ID: ${id} no fue encontrado`)
    // )
}

module.exports = getCharDetail;