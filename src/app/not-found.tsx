'use client';
import Link from 'next/link';
import './styles/globals.css';
 
const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1>Task Not Found</h1>
            <p>The task you are looking for does not exist.</p>
            <Link href="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
