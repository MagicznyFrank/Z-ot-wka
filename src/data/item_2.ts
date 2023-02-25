import { Item } from '../types/item';
import { connection } from '../db';

let items: Item[] = [];

connection.query('SELECT * FROM items', (error, results) => {
    if (error) {
        console.error('Error getting items from database: ', error);
        return;
    }

    items = results.map((row: any) => ({
        date: new Date(row.date),
        category: row.category,
        title: row.title,
        value: row.value
    }));
});

export { items };
