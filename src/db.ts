import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'passwd',
    database: 'zlotoweczka',
});
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database: ', err.stack);
            return;
        }
        console.log('Connected to database' + connection.threadId);
    });


export { connection, mysql };
