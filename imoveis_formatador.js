const fs = require("fs");
const csvParser = require("csv-parser");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;




const stream = fs.createReadStream("houses.csv");


let conteudo = [];
stream.pipe(csvParser()).on("data", (data) => { //pipe: cada linha sendo entendida como objeto
    conteudo.push({
        id: conteudo.length + 1,
        city: data['city'].trim(),
        area: Number(data['area']),
        rooms: Number(data['rooms']),
        bathroom: Number(data['bathroom']),
        'parking spaces': Number(data['parking spaces']),
        floor: Number(data['floor']),
        animal: Boolean(data['animal']),
        furniture: Boolean(data['furniture']),
        hoa: Number(data['hoa'] * 100),
        'rent amount': Number(data['rent amount'] * 100),
        'property tax': Number(data['property tax'] * 100),
        'fire insurance': Number(data['fire insurance'] * 100),
        total: Number(data['total'] * 100)
    });
    //city,area,rooms,bathroom,parking spaces,floor,animal,furniture,hoa,
    //rent amount,property tax,fire insurance,total
});

stream.on('end', () => { //o 'end' não tem argumento
    const csvWriter = createCsvWriter({
        path: 'imoveis.csv',
        header: [
            { id: 'id', title: 'id' },
            { id: 'city', title: 'city' },
            { id: 'area', title: 'area' },
            { id: 'rooms', title: 'rooms' },
            { id: 'bathroom', title: 'bathroom' },
            { id: 'parking spaces', title: 'parking_spaces' },
            { id: 'floor', title: 'floor' },
            { id: 'animal', title: 'animal' },
            { id: 'furniture', title: 'furniture' },
            { id: 'hoa', title: 'hoa' },
            { id: 'rent amount', title: 'rent_amount' },
            { id: 'property tax', title: 'property_tax' },
            { id: 'fire insurance', title: 'fire_insurance' },
            { id: 'total', title: 'total' },
        ]
    });

    csvWriter.writeRecords(conteudo);
});