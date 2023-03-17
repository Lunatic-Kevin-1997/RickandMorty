// const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req,res) => {
    try{
        const {id} = req.params;
        const response = await axios(URL + id);
        const data = response.data;

        const infoCharacter = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res.status(200).json(infoCharacter);
    }catch(error){
        res.status(404).send(error.message);
    }
    // const {id} = req.params;
    // axios(URL + id) //http://localhost:3001/rickandmorty/onsearch/1
    // .then((response) => {
    //     const character = {
    //         id: response.data.id,
    //         name: response.data.name,
    //         image: response.data.image,
    //         gender: response.data.gender,
    //         species: response.data.species
    //     };
    //     res.status(200).json(character);
    // }, (error) => res.status(500).json(error.message))
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    // .then(response => response.data)
    // .then(data =>{
    //     let character = {
    //         id: data.id,
    //         name: data.name,
    //         image: data.image,
    //         gender: data.gender,
    //         species: data.species
    //     }
    //     res.writeHead(200, {"Content-Type": "application/json"})
    //     .end(JSON.stringify(character));
    // })
    // .end(`El personaje con ID: ${id} no fue encontrado`)
    // .catch(error => res.writeHead(500, {"Content-Type": "text/plain"})
    // )
    
}

module.exports = getCharById;