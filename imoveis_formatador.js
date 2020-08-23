const fs = require("fs");
const csvParser = require("csv-parser");
//const createCsvWriter = require("csv-writer").createObjectCsvWriter;


const stream = fs.createReadStream("houses.csv");


let conteudo = [];
stream.pipe(csvParser()).on("data", (data) => { //pipe: cada linha sendo entendida como objeto
    conteudo.push({
        city: data['city'].trim(),
        area: Number(data['area']),
        rooms: Number(data['rooms']),
        bathroom: Number(data['bathroom']),
        'parking spaces': Number(data['parking spaces']),
        floor: Number(data['floor']),
        animal: Boolean(data['animal']),
        furniture: Boolean(data['furniture']),
        hoa: Number(data['hoa']),
        'rent amount': Number(data['rent amount']),
        'property tax': Number(data['property tax']),
        'fire insurance': Number(data['fire insurance']),
        total: Number(data['total'])
    });
    //city,area,rooms,bathroom,parking spaces,floor,animal,furniture,hoa,
    //rent amount,property tax,fire insurance,total
});

stream.on('end', () => { //o 'end' não tem argumento
    console.log("Conteúdo", conteudo)
})


//node imoveis_formatador.js