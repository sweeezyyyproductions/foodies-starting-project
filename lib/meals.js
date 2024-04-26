import sqlite3 from 'sqlite3';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss'; // For sanitizing user input to prevent XSS attacks
import fs from 'node:fs'; // For working with the file system


const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000));// Simulate delay
    
    
    // throw new Error('Could not fetch meals');
    return db.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug) { 
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);     
}

export async function saveMeal (meal) {
    meal.slug = slugify(meal.title, { lower: true  });
    meal.instructions = xss(meal.instructions);



    const extension = meal.image.name.split('.').pop(); 
    const fileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed');
        }

    } );

    meal.image = `/images/${fileName}`;

    db.prepare(`
    
    INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
    VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    
    `).run(meal);
  
}