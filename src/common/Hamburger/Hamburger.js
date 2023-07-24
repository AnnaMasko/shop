import styles from "./Hamburger.module.css";

export function Hamburger({ showMenu, setShowMenu}) {
	return (
		<nav className={styles.container} onClick={() => {
			//console.log(showMenu)
			setShowMenu(!showMenu)}
		}>
			<div className={styles.hamburger}>
				<div className={styles.hamburger__line}></div>
			</div>
		</nav>
	);
}