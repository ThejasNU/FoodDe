import { Schema, getModel, model } from "ottoman";

const ProductSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			maxlength: 60,
		},
		desc: {
			type: String,
			required: true,
			maxlength: 200,
		},
		img: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		extraOptions: {
			type: [
				{
					text: { type: String, required: true },
					price: { type: Number, required: true },
				},
			],
		},
	},
	{ timestamps: true }
);

export default getModel("Product") || model("Product", ProductSchema);
