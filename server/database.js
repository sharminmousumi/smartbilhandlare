const { MongoClient, ObjectID } = require('mongodb');
const uri = 'mongodb+srv://sharmin:Maldip123@cluster0.kef5w.mongodb.net/smart?retryWrites=true&w=majority';
const dbName = 'smart';
const collectionName = 'smartsbil';


function get(filter, callback) {
	MongoClient.connect(
		uri,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				callback('"ERROR!! Could not connect"');
				return;
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				
				const cursor = await col.find(filter);
				const array = await cursor.toArray();
				callback(array);
				
			}catch (error) {
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');

			}finally {
				client.close();
			}
		}
	)
}
function getBil(id, callback){
	get({_id: new ObjectID(id._id)}, array => callback(array[0]))
}

// Getall object
function getAllBil(callback) {
	get({}, callback)
}

// add new bil
function addBil(requestBody, callback) {
	const bil = requestBody
	MongoClient.connect(
		uri,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				console.log("Error add-hamster", error.message)
				callback('"ERROR!! Could not connect add-hamster"');
				return;
			}
			const col = client.db(dbName).collection(collectionName);
			
			try {
				const result = await col.insertOne(bil);
				callback({
					result: result.result,
					ops: result.ops
				})
			}
			catch (error) {
				console.error(' error: ' + error.message);
				callback('"ERROR!! Query error"');
			}
			finally {
				client.close();
			}
		}
	)
}
//Delete object
function deleteBil(id, callback){
	MongoClient.connect(uri, {useUnifiedTopology:true},
        async (error, client) => {
            if (error){
                callback("'Error! Couldnt connect'");
                return;
            }
			const col = client.db(dbName).collection(collectionName);
            try {
                const result = await col.deleteOne({_id: new ObjectID(id)});
                callback({
                    result: result.result,
                    ops: result.ops
                })
            } catch(error){
                console.error('Couldnt delete: ' + error.message);
                callback('error');
            } finally{
                client.close();
            }
        }
    )
}

module.exports = {
	getBil,getAllBil, deleteBil,addBil
}