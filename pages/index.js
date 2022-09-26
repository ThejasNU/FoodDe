import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>FoodDe</title>
				<meta name="description" content="Online Food Ordering Website" />
				<link rel="icon" href="/favicon1.ico" />
			</Head>
		</div>
	);
}
