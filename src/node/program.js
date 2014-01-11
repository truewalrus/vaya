collections.push(function(err, db) {
    if (!err) {
        console.log("Connected to test 1!");
        db.collection('programs', {strict: true}, function(err, collection) {
            if (err) {
                console.log("The programs collection doesn't exist.  Creating it now.");
                db_connector.createCollection('programs', {strict: true}, function(err, collection) {
                    if (err) {
                        console.log(err);
                    }
                });
            }

            db.ensureIndex('programs', {'serial': 1}, {unique: true, dropDups: true}, function() {});
        });
    }
});

function program_upsertProgram(request, response){
    db_connector.collection('programs', function(err, collection){
        collection.update({'serial':request.body.serial.toUpperCase()}, {$set:request.body.program}, {upsert: true}, function(error, data){
            if (error) {
                response.send(500, { error: "Database error occurred while processing request." });
            }
            else {
                response.send(200, { message: 'Settings updated.' });
            }
        });
    });
}

function program_getProgram(request, response) {
    db_connector.collection('programs', function(err, collection) {
        collection.find({'serial': request.params.serial.toUpperCase()}).toArray(function(error, data) {
            if(error){
                response.send(500, { error: "Database error occurred while processing request."});
            }
            else{
                response.send(data);
            }
        });
    });
}



/* ALL DIS STUFF BE COOL */
routing.push(function(app) {
    app.post('/api/program/upsert', program_upsertProgram);
    app.get('/api/program/getProgram/:serial', program_getProgram);
});