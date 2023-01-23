const fs = require('fs');
const https = require('https');

const express = require('express');

const PORT = 8443;
const app = express();

https.createServer({
    key: fs.readFileSync('my_cert.key'),
    cert: fs.readFileSync(`my_cert.crt`)
}, app).listen(PORT, function() {
    console.log("https server running on port " +  PORT)
});

// 

// app.listen(PORT, function() {
//     console.log("HTTP server escuchando por el puerto " +  PORT);
// });

app.get('/prueba', function(req, res) {
    console.log("Prueba");
})