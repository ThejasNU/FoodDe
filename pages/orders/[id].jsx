import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";
import Head from "next/head";

const Order = ({ order }) => {
	const status = order.status;

	const statusClass = (index) => {
		if (index - status < 1) return styles.done;
		if (index - status === 1) return styles.inProgress;
		if (index - status > 1) return styles.undone;
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Orders | FoodDe</title>
			</Head>
			<div className={styles.left}>
				<div className={styles.row}>
					<table className={styles.table}>
						<thead>
							<tr className={styles.trTitle}>
								<th>Order ID</th>
								<th>Customer</th>
								<th>Address</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr className={styles.tr}>
								<td className={styles.id}>{order.id}</td>
								<td className={styles.name}>{order.customer}</td>
								<td className={styles.address}>{order.address}</td>
								<td className={styles.total}>₹{order.total}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.row}>
					<div className={statusClass(0)}>
						<Image src="/img/paid.png" width={30} height={30} alt="" />
						<span>Payment</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src="/img/checked.png"
								width={20}
								height={20}
								alt=""
							/>
						</div>
					</div>
					<div className={statusClass(1)}>
						<Image src="/img/bake.png" width={30} height={30} alt="" />
						<span>Preparing</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src="/img/checked.png"
								width={20}
								height={20}
								alt=""
							/>
						</div>
					</div>
					<div className={statusClass(2)}>
						<Image src="/img/bike.png" width={30} height={30} alt="" />
						<span>On the way</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src="/img/checked.png"
								width={20}
								height={20}
								alt=""
							/>
						</div>
					</div>
					<div className={statusClass(3)}>
						<Image src="/img/delivered.png" width={30} height={30} alt="" />
						<span>Delivered</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src="/img/checked.png"
								width={20}
								height={20}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>CART TOTAL</h2>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Subtotal:</b>₹{order.total}
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Discount:</b>₹0
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Total:</b>₹{order.total}
					</div>
					<button disabled className={styles.button}>
						CASH ON DELIVERY
					</button>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/${params.id}`
	);
	return {
		props: { order: res.data },
	};
};

export default Order;
