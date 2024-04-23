import sqlite3 from 'sqlite3';

// Open a database in serialized mode
const db = new sqlite3.Database('meals.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the meals database.');
});

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM meals", [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}
