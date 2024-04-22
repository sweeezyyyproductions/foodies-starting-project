import Link from 'next/link';
export default function CommunityPage() {
    return (
        <main>
            <h1>Community Page</h1>
            <p>
                Check out the <Link href="/meals">Meals Page</Link> to learn more about our meals!
                </p>


                

                <p>
                Check out the <Link href="meals/share">Share Page</Link> to spread the word about us!
                </p>

                
        </main>
    );
}