import connectDB from "../../../util/couchbase";
import Product from "../../../models/Product";

export default async function handler(req, res) {
	const { method, cookies } = req;
	const token = cookies.token;

	await connectDB();

	if (method === "GET") {
		try {
			const products = await Product.find();
			res.status(200).json(products.rows);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	if (method === "POST") {
		if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
			return res.status(401).send("Not Authenticated");
		}
		try {
			const product = await Product.create(req.body);
			res.status(201).json(product);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
