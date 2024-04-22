import Link from 'next/link'; 

export default function MealDetails({ params }) {
    return (
        <main>
            <h1>test</h1>
            <p>
                {params.slug}
            </p>
        </main>
    );
}