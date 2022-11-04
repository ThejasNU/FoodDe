import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ productList }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>FoodDe</title>
				<meta name="description" content="Online Food Ordering Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<ProductList productList={productList} />
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
	);

	return {
		props: {
			productList: res.data,
		},
	};
};
