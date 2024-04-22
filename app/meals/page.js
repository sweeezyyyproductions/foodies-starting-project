import Link from 'next/link';

export default function MealsPage() {
    return (
        <main>
            <h1>Meals Page</h1>
                <p>
                Check out the <Link href="/community">Community Page</Link> to learn more about us!
                </p>

                <p>
                Check out the <Link href="meals/share">Share Page</Link> to spread the word about us!
                </p>
                <p>
                    <Link href="/meals/test-1">Meal 1</Link>
                    <Link href="/meals/test-2">Meal 2</Link>
                </p>

        </main>
    );
}