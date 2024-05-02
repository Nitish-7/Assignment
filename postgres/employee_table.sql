CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department VARCHAR(100),
    salary NUMERIC(10, 2)
);

INSERT INTO employees (name, department, salary)
VALUES ('Nitish', 'ASE', 9876);

SELECT * FROM employees;

UPDATE employees
SET salary = 9999
WHERE name = 'Nitish';

ALTER TABLE employees
ADD COLUMN email VARCHAR(255);

DELETE FROM employees
WHERE name = 'Nitish';

DROP TABLE employees;