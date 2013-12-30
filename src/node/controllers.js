collections.push(function(err, db) {
	if (!err) {
		console.log("Connected to test 1!");
		db.collection('controllers', {strict: true}, function(err, collection) {
			if (err) {
				console.log("The controllers collection doesn't exist.  Creating it now.");
				db_connector.createCollection('controllers', {strict: true}, function(err, collection) {
					if (err) {
						console.log(err);
					}
				});
			}

           // db.ensureIndex('controllers', {'id': 1}, {unique: true, dropDups: true}, function() {});
		});
	}
});

function controllers_upsertController(request, response){
	console.log(request.body.serial);
	db_connector.collection('controllers', function(err, collection){
		collection.update({'serial':request.body.serial}, {$set:request.body.controller}, {upsert: true}, function(error, data){
			if (error) {
                response.send(500, { error: "Database error occurred while processing request." });
            }
            else {
                response.send(200, { message: 'Settings updated.' });
            }
		});
	});
}

function controllers_getControllers(request, response) {
    db_connector.collection('controllers', function(err, collection) {
        collection.find({'user': request.params.user}).toArray(function(error, data) {
            if(error){
				response.send(500, { error: "Database error occurred while processing request."});
			}
			else{
				response.send(data);
			}
        });
    });
}

function controllers_getController(request, response) {
    db_connector.collection('controllers', function(err, collection) {
        collection.find({'serial': request.params.serial}).toArray(function(error, data) {
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
	app.post('/api/controllers/upsert', controllers_upsertController);
	app.get('/api/settings/getControllers/:user', controllers_getControllers);
	app.get('/api/settings/getController/:serial', controllers_getController);
});