import Link from 'next/link';
import logoImg from './assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';


export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                Home
                <Image src={logoImg} alt="Plate with food" priority />
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Share Meal</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}