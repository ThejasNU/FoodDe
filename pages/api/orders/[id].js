import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
	const {
		method,
		query: { id },
		cookies,
	} = req;
	const token = cookies.token;

	await dbConnect();

	if (method === "GET") {
		try {
			const order = await Order.findById(id);
			res.status(200).json(order);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	if (method === "PUT") {
		if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
			return res.status(401).send("Not Authenticated");
		}
		try {
			const order = await Order.findByIdAndUpdate(id, req.body, {
				new: true,
			});
			res.status(200).json(order);
		} catch (err) {
			res.status(500).json(err);
		}
	}
};

export default handler;
