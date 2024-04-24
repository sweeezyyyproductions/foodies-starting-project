import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '../../components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid  meals={meals}/>
}

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
    
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals/>
            </Suspense> 
            
        </main>

        

    </>
       
    );
}