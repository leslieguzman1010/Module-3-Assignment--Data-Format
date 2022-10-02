// vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=xml

import fetch from 'node-fetch';
const apiURL = 'https://swapi.dev/api/people'
fetch(apiURL)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log('all data was recieved successfully');
    });
console.log('Getting data');