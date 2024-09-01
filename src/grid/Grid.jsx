import React from 'react';
import styles from './Grid.module.css';

const Grid = () => {
	console.log(styles);

	return (
		<div className='wrapper'>
			<div className={styles.grid}>
				<div className={styles.grid__item}>
					<img
						src='https://www.classix.se/images/cars/2022/1993-bmw-m5-touring/daytona-violet.jpg'
						alt=''
						className={styles.grid__image}
					/>
					<h3>BMW E34 Daytona Violet</h3>

					{/* <p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p> */}
					<button className={styles.grid__button}>Click me!</button>
				</div>
				<div className={styles.grid__item}>
					<h3>Item2</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
					<button className={styles.grid__button}>Click me!</button>
				</div>
				<div className={styles.grid__item}>
					<h3>Item3</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item4</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item5</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item6</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item6</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item6</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item6</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item6</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
				<div className={styles.grid__item}>
					<h3>Item6</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus quam sunt eius est, ducimus dolores, eaque ad
						labore velit maiores vero dolorum quos! Tempore magni
						quaerat unde quisquam aliquid vero?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Grid;
