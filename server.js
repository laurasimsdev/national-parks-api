const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const parks = {
    'arches' : {
        'state': 'Utah',
        'dateEstablished': 'February 26, 1919',
        'areaInAcres': 49071,
        'annualRecreationVisitors': 4069098,
    },
    'rocky mountain': {
        'state': 'Colorado',
        'dateEstablished': 'January 26, 1915',
        'areaInAcres': 265807,
        'annualRecreationVisitors': 4434848,
    },
    'yosemite': {
        'state': 'California',
        'dateEstablished': 'October 1, 1890',
        'areaInAcres': 761747,
        'annualRecreationVisitors': 3287595,
    },
    'zion': {
        'state': 'Utah',
        'dateEstablished': 'November 19, 1919',
        'areaInAcres': 147242,
        'annualRecreationVisitors': 5039835,
    },
    'unknown': {
        'state': 'unknown',
        'dateEstablished': 'unknown',
        'areaInAcres': 'unknown',
        'annualRecreationVisitors': 'unknown',
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const parkName = request.params.name.toLowerCase()
    if (parks[parkName]) {
        response.json(parks[parkName])
    } else {
        response.json([parks['unknown']])
    }
    //response.json(parks)
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is running on port ${PORT}`)
})