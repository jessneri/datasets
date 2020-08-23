const fs = require("fs");
const csvParser = require("csv-parser");
//const createCsvWriter = require("csv-writer").createObjectCsvWriter;


const stream = fs.createReadStream("houses.csv");


let conteudo = [];
stream.pipe(csvParser()).on("data", (data) => { //pipe: cada linha sendo entendida como objeto
    conteudo += data;
    console.log("Conteúdo", data);
});