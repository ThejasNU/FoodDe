import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
	const images = [
		"/img/featured.png",
		"/img/featured2.png",
		"/img/featured3.png",
	];
	const [index, setIndex] = useState(0);
	const handleArraw = (direction) => {
		if (direction === "l") {
			setIndex(index !== 0 ? index - 1 : 2);
		}
		if (direction === "r") {
			setIndex(index !== 2 ? index + 1 : 0);
		}
	};
	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow("l")}
			>
				<Image src="/img/arrowl.png" alt="left arrow" layout="fill" />
			</div>
			<div className={styles.wrapper}>
				<div className={styles.imgContainer}></div>
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow("r")}
			>
				<Image src="/img/arrowr.png" alt="right arrow" layout="fill" />
			</div>
		</div>
	);
};

export default Featured;
