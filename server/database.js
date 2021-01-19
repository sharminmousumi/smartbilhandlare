const { MongoClient, ObjectID } = require('mongodb');
const uri = 'mongodb+srv://sharmin:Maldip123@cluster0.kef5w.mongodb.net/smart?retryWrites=true&w=majority';
const dbName = 'smart';
const collectionName = 'smartsbil';


function getBil(callback) {
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
				const cursor = await col.aggregate([{ $sample: { size: 2 } }]);
				const array = await cursor.toArray()
				callback(array);
			}
			catch (error) {
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');
			}
			finally {
				client.close();
			}
		}
	)
}

module.exports = {
	getBil
}