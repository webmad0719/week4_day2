
// search queries

{ year: '1994' }

{ year: { $ne: '1994' } }

{ _id: ObjectId('5c6a9f45b975fde86574b6a7') }

{ $and: [{ year: { $gt: '1995' } }, { year: { $lt: '1999' } }] }       // Del año 95 al 99

{ $and: [{ year: '1995' }, { rate: { $gt: '8' } }] }        // Del año 95 y con más de un 8

{ $or: [{ year: '1995' }, { year: '1997' }] }      // Del año 95 o del 97

{ $nor: [{ year: '1995' }, { director: 'Christopher Nolan' }] }      // Ni del año 95 ni dirigida por C.N.

{ year: { $eq: '1995' } }

{ year: { $gt: '1995' } }

{ year: { $gte: '1995' } }

{ year: { $lt: '1995' } }

{ year: { $lte: '1995' } }

{ genre: { $in: ["Drama", "Fantasy"] } }        // Cualquiera de drama o fantasía

{ genre: { $nin: ["Drama", "Horror"] } }        // Ninguna de drama u horror

{ genre: { $all: ["Drama", "Horror"] } }        // Todas con drama y horror

{ name: { $exists: true } }                     // Registros con la propiedad 'name'




// Ejemplos adicionales de queries (no aplicables a Movies)

{ "address.street": "Southern Boulevard" }            // Un valor 'Southern Boulevard' en la propiedad 'street' del objeto 'address'

{ "grades.score": { $eq: 4 } }                  // Un valor de 4 en la propiedad 'score' del array de objetos 'grades'




// project 

{ title: 1, _id: 0 }


// sort

{ rate: 1 }

{ rate: -1 }

