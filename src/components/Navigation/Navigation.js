import styles from './Navigation.module.scss';

export default function Navigation() {
    return (
        <nav className={styles.appNavigation}>
            <a href="/">Home</a>
            <a href="/">About</a>
        </nav>
    );
}