import Link from 'next/link';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.notFoundTitle}>Page Not Found</h1>
            <p className={styles.notFoundMessage}>Sorry, we couldn't find the page you were looking for.</p>
            <Link href="/" className={styles.homeLink}>Go back to the homepage</Link>
        </div>
    );
}