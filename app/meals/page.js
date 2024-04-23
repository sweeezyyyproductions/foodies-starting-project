import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '../../components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export default async function MealsPage() {
   const meals = await getMeals();

    return ( <>
        <header className={classes.header}>
            <h1>
                Meals created, {' '} <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Some text
              {/* <Link href='/'>Back to Home</Link>   */}
            </p> 
            <p  className={classes.cta}>
                <Link href='/meals/share'>Add new Meal</Link>

            </p>

        </header>
        <main className={classes.main}>
            <MealsGrid  meals={meals}/>
        </main>

        

    </>
       
    );
}