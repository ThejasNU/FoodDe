import { connect } from "ottoman";

const COUCHBASE_URL = process.env.NEXT_PUBLIC_COUCHBASE_URL;
const COUCHBASE_USERNAME = process.env.NEXT_PUBLIC_COUCHBASE_USERNAME;
const COUCHBASE_PASSWORD = process.env.NEXT_PUBLIC_COUCHBASE_PASSWORD;
const COUCHBASE_BUCKET = process.env.NEXT_PUBLIC_COUCHBASE_BUCKET;

if (!COUCHBASE_URL) {
	throw new Error(
		"Please define the COUCHBASE_URL environment variable inside .env.local"
	);
}
if (!COUCHBASE_USERNAME) {
	throw new Error(
		"Please define the COUCHBASE_USERNAME environment variable inside .env.local"
	);
}
if (!COUCHBASE_PASSWORD) {
	throw new Error(
		"Please define the COUCHBASE_PASSWORD environment variable inside .env.local"
	);
}
if (!COUCHBASE_BUCKET) {
	throw new Error(
		"Please define the COUCHBASE_BUCKET environment variable inside .env.local"
	);
}

let cached = global.ottoman;

if (!cached) {
	cached = global.ottoman = { conn: null, promise: null };
}

async function connectDB() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = connect({
			connectionString: COUCHBASE_URL,
			username: COUCHBASE_USERNAME,
			password: COUCHBASE_PASSWORD,
			bucketName: COUCHBASE_BUCKET,
		}).then((ottoman) => {
			return ottoman;
		});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

export default connectDB;
