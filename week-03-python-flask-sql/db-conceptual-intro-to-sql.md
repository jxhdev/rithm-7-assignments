# Database Conceptual Exercise

Please answer the following questions (you can write your answers directly in this README file.)

1.  What is an RDBMS?
  
    A database system that manages data in a system of tables made up of rows and columns

2.  What is the difference between RDBMS and SQL?

    RDBMS is the system for organizing data and SQL is the language that queries and interacts with that system. 
3.  What is the difference between a table and a schema?

    A schema defines the structure of how data will be structured in the database while a table is a specific collection of data made up of rows and columns. Tables are organized based on schemas.

4.  What is a relational database?
  A relational database is a database based on tables of rows and columns
5.  How do you connect to a database in psql?

      ```psql \c [NAME OF TABLE] ```

6.  How do you show all of your databases in psql?

    ` \l `
7.  How do you create a database in psql?

    ` CREATE DATABASE 'name'; `
8.  How do you drop a database in psql?

    ` DROP DATABASE 'name'; `

9.  How do you create a database in the terminal?

    ` createdb 'nameofdb' `

10. How do you drop a database in the terminal?

    ` dropdb 'nameofdb' `

---

# Intro to SQL Exercises

### Part 1 - CRUD Exercises

Write the SQL commands necessary to do the following:

1.  Create a database called `first_assignment`.

    ` CREATE DATABASE first_assignment;`
2.  Connect to that database.

    ` \c first_assignment `

3.  Create a table called `products` with columns for:

    - `id`, which should be a unique auto-incremementing integer
    - `name`, which should be text, and not nullable
    - `price`, which should be numeric, and greater than zero
    - `can_be_returned`, which should be a boolean, and not nullable

    ```sql 
    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      price NUMERIC CHECK (price > 0),
      can_be_returned BOOLEAN NOT NULL
    );
    ```

4.  Add a product to the table with the name of "chair", price of 44.00, and can_be_returned of false.

    ```sql
    INSERT INTO products(name, price, can_be_returned) VALUES ('chair', 44.00, FALSE);
    ```
5.  Add a product to the table with the name of "stool", price of 25.99, and can_be_returned of true.

    ```sql
    INSERT INTO products(name, price, can_be_returned) VALUES ('stool', 25.99, TRUE);
    ```

6.  Add a product to the table with the name of "table", price of 124.00, and can_be_returned of false.

    ```sql 
    INSERT INTO products(name, price, can_be_returned) VALUES ('table', 124.00, false);
    ```
7.  Display all of the rows and columns in the table.
    ```sql
    SELECT * FROM products;
    ```
8.  Display all of the names of the products.
    ```sql
    SELECT name FROM products;
    ```
9.  Display all of the names and prices of the products.
    ```sql
    SELECT name, prices FROM products;
    ```
10. Add a new product - make up whatever you would like!
    ```sql
    INSERT INTO products(name, price, can_be_returned) VALUES ('plates', 999.99, false)
    ```
11. Display only the products that `can_be_returned`.
    ```sql
    SELECT * FROM products WHERE can_be_returned=TRUE;
    ```
12. Display only the products that have a price less than 44.00.
    ```sql
    SELECT * FROM products WHERE price < 44.00;
    ```
13. Display only the products that have a price in between 22.50 and 99.99.
    ```sql
    SELECT * FROM products WHERE price BETWEEN 22.50 AND 99.99;
    ```
14. There's been a change in company policy, and now all tables are returnable. Update the database accordingly.
    ```sql
    UPDATE products SET can_be_returned = TRUE where name='table';
    ```
15. There's a sale going on: Everything is $20 off! Update the database accordingly.
    ```sql
    UPDATE products SET price = price + 20;
    ```
16. Because of the sale, everything that costs less than $25 has sold out. Remove all products whose price meets this criteria.
    ```sql
    DELETE FROM products WHERE price < 25.00;
    ```
17. And now the sale is over. For the remaining products, increase their price by $20.
    ```sql
    UPDATE products set price = price+20;
    ```

### Part 2 - Operators and Aggregates

Let's start with the following sql file called `data.sql`

```sql
DROP DATABASE IF EXISTS  aggregates_exercise;

CREATE DATABASE aggregates_exercise;

\c aggregates_exercise

CREATE TABLE snacks (
  id SERIAL PRIMARY KEY,
  name TEXT,
  kind TEXT,
  calories INTEGER,
  price NUMERIC
);

INSERT INTO snacks
  (name, kind, calories, price)
VALUES
  ('snickers', 'candy bar', 300, 2.99),
  ('cupcakes', 'baked goods', 260, 2.49),
  ('cake', 'baked goods', 400, 3.99),
  ('potato chips', 'chips', 500, 4.99),
  ('milky way', 'candy bar', 220, 7.99),
  ('cheetos', 'chips', 250, 11.99),
  ('chocolate chip cookie', 'baked goods', 290, 2.89),
  ('3 musketeers', 'candy bar', 230, 1.99),
  ('cheese its', 'chips', 100, 0.99),
  ('funions', 'chips', 280, 2.39),
  ('fig newtons', 'baked goods', 240, 3.99),
  ('fruit roolup', 'fruit snack', 420, 5.39),
  ('gushers', 'fruit snack', 220, 3.38),
  ('gogurt', 'yogurt', 260, 5.32),
  ('capri sun', 'beverage', 300, 1.49),
  ('sunny D', 'beverage', 120, 3.99),
  ('ice cream', 'frozen', 2000, 5.29),
  ('rice krispies', 'baked goods', 300, 1.99),
  ('pringles', 'chips', 400, 2.39),
  ('twix', 'candy bar', 450, 2.90),
  ('payday', 'candy bar', 500, 2.39);
```

```sh
psql < data.sql
psql aggregates_exercise
```

Write the following queries to perform the following:

1.  Find the names of the top five most caloric snacks.
    ```sql
    SELECT name FROM snacks ORDER BY calories DESC LIMIT 5;
    ```
2.  Find the names of the 3 cheapest snacks.
    ```sql
    SELECT name FROM snacks ORDER BY price ASC LIMIT 3;
    ```

3.  Calculate the total calories for all the snacks. Call this column `total_calories`.
    ```sql
    SELECT SUM(calories) AS total_calories FROM snacks;
    ```
4.  Calculate the average price for all the snacks. Call this column `average_price`.

    ```sql
    SELECT AVG(price) AS average_price FROM snacks;
    ```
5.  Calculate the lowest price for all the snacks. Call this column `lowest_price`.
    ```sql
    SELECT MIN(price) AS lowest_price FROM snacks;
    ```
6.  Calculate the highest price for all the snacks. Call this column `highest_price`.
    ```sql
    SELECT MAX(price) AS highest_price FROM snacks;
    ```
7.  Find the count for each kind of candy in the table. Your output should look like this:

    ```sql
      SELECT kind, COUNT(*) from snacks GROUP BY kind;
    ```
    ```
    /*
        kind     | count
    -------------+-------
    frozen      |     1
    chips       |     5
    baked goods |     5
    yogurt      |     1
    beverage    |     2
    candy bar   |     5
    fruit snack |     2
    */
    ```

8.  Find the count of each kind of candy where the count is greater than one. Your output should look like this:

    ```sql

    SELECT kind, COUNT(kind) FROM snacks GROUP BY kind HAVING COUNT(kind) > 1;

    /*
        kind     | count
    -------------+-------
    chips       |     5
    baked goods |     5
    beverage    |     2
    candy bar   |     5
    fruit snack |     2
    */
    ```

9.  Find the average number of calories for each kind of candy and call the name of your column that contains the average `average_calories`. Order your output by the kind of candy in ascending order. Your output should look like this.

    ```sql
    SELECT kind, ROUND(AVG(calories)) AS average_calories FROM snacks GROUP BY kind;

    /*
        kind     | average_calories
    -------------+------------------
    baked goods |              298
    beverage    |              210
    candy bar   |              340
    chips       |              306
    frozen      |             2000
    fruit snack |              320
    yogurt      |              260
    */
    ```

### Part 3 - Codewars

Complete the following Codewars problems:

[SQL Basics: Simple WHERE and ORDER BY](https://www.codewars.com/kata/sql-basics-simple-where-and-order-by/train/sql)

[SQL Basics: Simple SUM](https://www.codewars.com/kata/sql-basics-simple-sum)

[SQL Basics: Simple MIN / MAX](https://www.codewars.com/kata/sql-basics-simple-min-slash-max/train/sql)

[Find all active students](https://www.codewars.com/kata/1-find-all-active-students/train/sql)

[SQL Basics: Simple GROUP BY](https://www.codewars.com/kata/sql-basics-simple-group-by/train/sql)

[SQL Basics: Simple HAVING](https://www.codewars.com/kata/sql-basics-simple-having/train/sql)