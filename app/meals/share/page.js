import Link from 'next/link';

export default function ShareMealPage() {
    return (
        <main>
            <h1>Share Meal</h1>
            <p>
                Check out the <Link href="/meals">Community Page</Link> to learn more about our meals!
                </p>

                <p>
                Check out the <Link href="/community">Community Page</Link> to learn more about us!
                </p>
        </main>
    );
}