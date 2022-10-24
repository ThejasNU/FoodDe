import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<tr className={styles.trTitle}>
						<th>Product</th>
						<th>Name</th>
						<th>Extras</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>

					<tr className={styles.tr}>
						<td className={styles.imgContainer} style={{ textAlign: "center" }}>
							<Image
								src="/img/pizza.png"
								layout="fill"
								objectFit="cover"
								alt=""
							/>
						</td>
						<td className={styles.name} style={{ textAlign: "center" }}>
							CORALZO
						</td>
						<td className={styles.extras} style={{ textAlign: "center" }}>
							Double ingredient, spicy sauce
						</td>
						<td className={styles.price} style={{ textAlign: "center" }}>
							₹500
						</td>
						<td className={styles.quantity} style={{ textAlign: "center" }}>
							2
						</td>
						<td className={styles.total} style={{ textAlign: "center" }}>
							₹1000
						</td>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.imgContainer} style={{ textAlign: "center" }}>
							<Image
								src="/img/pizza.png"
								layout="fill"
								objectFit="cover"
								alt=""
							/>
						</td>
						<td className={styles.name} style={{ textAlign: "center" }}>
							CORALZO
						</td>
						<td className={styles.extras} style={{ textAlign: "center" }}>
							Double ingredient, spicy sauce
						</td>
						<td className={styles.price} style={{ textAlign: "center" }}>
							₹500
						</td>
						<td className={styles.quantity} style={{ textAlign: "center" }}>
							2
						</td>
						<td className={styles.total} style={{ textAlign: "center" }}>
							₹1000
						</td>
					</tr>
				</table>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>CART TOTAL</h2>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Subtotal:</b>₹2000
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Discount:</b>₹0
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Total:</b>₹2000
					</div>
					<button className={styles.button}>CHECKOUT NOW!</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
