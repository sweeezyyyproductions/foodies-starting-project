import sqlite3 from 'sqlite3';
import sql from 'better-sqlite3';


const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000));// Simulate delay
    
    
    // throw new Error('Could not fetch meals');
    return db.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug) { 
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);     
}