import Link from 'next/link'; 

export default function MealDetails({ params }) {
    return (
        <main>
            <h1>test 1</h1>
            <p>
                {params.slug}
            </p>
        </main>
    );
}