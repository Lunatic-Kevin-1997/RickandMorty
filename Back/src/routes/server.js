// const http = require('http');
const express = require('express');
const app = express();
const router = require('../routes/index')
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/rickandmorty', router);
 

// const getCharById = require('../controllers/getCharById');
// const getCharDetail = require('../controllers/getCharDetail');

app.listen(3001, () => {
   console.log('Server on port 3001');
});

// http.createServer((req, res) =>{
//    res.setHeader('Access-Control-Allow-Origin','*')
//    let id = req.url.split('/').at(-1);
//    if(req.url.includes('onsearch')){
//     getCharById(res, id)
//    }
//    if(req.url.includes('detail')){
//     getCharDetail(res, id)
//    }
// }).listen(3001, 'localhost');