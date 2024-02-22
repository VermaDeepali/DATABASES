const mysql = require('mysql2/promise');
require('dotenv').config();
const { HOST, PASSWORD, DATABASE } = process.env;

// Create a connection pool
const pool = mysql.createPool({
    host: HOST,
    user: "root",
    password: PASSWORD,
    database: DATABASE
});

// Function to perform INSERT query
async function executeInsertQuery() {
    try {
        const [rows] = await pool.execute(`INSERT INTO Customers VALUES (9, 'Blauer See', 'Hanna Moos', 'Forsterstr. 57', 'Mannheim', '68306', 'Germany')`);
        console.log('INSERT Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing SELECT query:', error);
        throw error;
    }
}

// Function to perform SELECT query
async function executeSelectQuery() {
    try {
        const [rows] = await pool.execute('SELECT * FROM Customers;');
        console.log('SELECT Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing SELECT query:', error);
        throw error;
    }
}

// Function to perform UPDATE query
async function executeUpdateQuery() {
    try {
        const [rows] = await pool.execute('UPDATE Customers SET CustomerName = "Deepali" WHERE CustomerID = 1;');
        console.log('UPDATE Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing UPDATE query:', error);
        throw error;
    }
}

// Function to perform DELETE query
async function executeDeleteQuery() {
    try {
        const [rows] = await pool.execute('DELETE FROM Customers WHERE CustomerID = 6;');
        console.log('DELETE Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing DELETE query:', error);
        throw error;
    }
}

// Function to perform INNER JOIN query
async function executeInnerJoinQuery() {
    try {
        const [rows] = await pool.execute(`
            SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
            FROM Orders
            INNER JOIN Customers
            ON Orders.CustomerID = Customers.CustomerID
        `);
        console.log('INNER JOIN Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing INNER JOIN query:', error);
        throw error;
    }
}

// Function to perform LEFT JOIN query
async function executeLeftJoinQuery() {
    try {
        const [rows] = await pool.execute(`
            SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
            FROM Customers
            LEFT JOIN Orders
            ON Customers.CustomerID = Orders.CustomerID
        `);
        console.log('LEFT JOIN Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing LEFT JOIN query:', error);
        throw error;
    }
}

// Function to perform RIGHT JOIN query
async function executeRightJoinQuery() {
    try {
        const [rows] = await pool.execute(`
            SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
            FROM Customers
            RIGHT JOIN Orders
            ON Customers.CustomerID = Orders.CustomerID
        `);
        console.log('RIGHT JOIN Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing RIGHT JOIN query:', error);
        throw error;
    }
}

// Function to perform CROSS JOIN query
async function executeCrossJoinQuery() {
    try {
        const [rows] = await pool.execute(`
            SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
            FROM Customers
            CROSS JOIN Orders
        `);
        console.log('CROSS JOIN Query results:', rows);
        return rows;
    } catch (error) {
        console.error('Error executing CROSS JOIN query:', error);
        throw error;
    }
}


// Main function to connect and execute queries
async function main() {
    try {
        // Execute INSERT query
        await executeInsertQuery();

        // Execute SELECT query
        await executeSelectQuery();

        // Execute UPDATE query
        await executeUpdateQuery();

        // Execute DELETE query
        await executeDeleteQuery();

        // Execute INNER JOIN query
        await executeInnerJoinQuery();

        // Execute LEFT JOIN query
        await executeLeftJoinQuery();

        // Execute RIGHT JOIN query
        await executeRightJoinQuery();

        // Execute CROSS JOIN query
        await executeCrossJoinQuery();

        // Close the connection when done
        await pool.end();
        console.log('MySQL connection closed');
        return
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the main function
main();
