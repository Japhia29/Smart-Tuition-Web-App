var express = require('express');
var app = express();
var catalyst = require('zcatalyst-sdk-node');
app.use(express.json());

app.post('/server/Customer_Review/insert_data', function (req, res) {
    var catalystApp = catalyst.initialize(req);
    var datastore = catalystApp.datastore();
    var rowData = req.body;

    console.log("Received data:", req.body);

    let table = datastore.table('Customer_Review');
    let insertPromise = table.insertRow(rowData);

    insertPromise
        .then((row) => {
            console.log("Inserted row:", row);
            res.send(row);
        })
        .catch((err) => {
            console.error("Error:", err);
            res.status(500).send("An error occurred while inserting data.");
        });
});

module.exports = app;
