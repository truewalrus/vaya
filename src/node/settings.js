collections.push(function(err, db) {
	if (!err) {
		console.log("Connected to test 1!");
		db.collection('settings', {strict: true}, function(err, collection) {
			if (err) {
				console.log("The settings collection doesn't exist.  Creating it now.");
				db_connector.createCollection('settings', {strict: true}, function(err, collection) {
					if (err) {
						console.log(err);
					}
				});
			}

            db.ensureIndex('settings', {'id': 1}, {unique: true, dropDups: true}, function() {});
		});
	}
});

function settings_upsertSettings(request, response){
	db_connector.collection('settings', function(err, collection){
		collection.update({'id':request.body.username.toUpperCase()}, {$set:request.body.settings}, {upsert: true}, function(error, data){
			if (error) {
                response.send(500, { error: "Database error occurred while processing request." });
            }
            else {
                response.send(200, { message: 'Settings updated.' });
            }
		});
	});
}

function settings_getSettings(request, response) {
    db_connector.collection('settings', function(err, collection) {
        collection.find({'id': request.params.username.toUpperCase()}).toArray(function(error, data) {
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
	app.post('/api/settings/upsert', settings_upsertSettings);
	app.get('/api/settings/getSettings/:username', settings_getSettings);
});