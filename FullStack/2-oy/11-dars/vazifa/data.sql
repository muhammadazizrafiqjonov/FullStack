create table customers(
    id int PRIMARY KEY,
    full_name VARCHAR(50),
    city VARCHAR(50)
);

INSERT INTO customers (id, full_name, city) VALUES
(1, 'Ali Karimov', 'Tashkent'),
(2, 'Vali Usmonov', 'Samarkand'),
(3, 'Dilshod Bekov', 'Bukhara'),
(4, 'Aziza Rahmonova', 'Tashkent'),
(5, 'Malika Tursunova', 'Andijan'),
(6, 'Sardor Qodirov', 'Namangan'),
(7, 'Jasmin Xolmatova', 'Fergana'),
(8, 'Bobur Ismoilov', 'Khiva'),
(9, 'Shohista Alimuhamedova', 'Nukus'),
(10, 'Bekzod Nuriddinov', 'Navoi'),
(11, 'Kamola Saidova', 'Tashkent'),
(12, 'Javohir Toirov', 'Samarkand'),
(13, 'Zarina Nematova', 'Bukhara'),
(14, 'Otabek Rasulov', 'Andijan'),
(15, 'Lola Karimova', 'Fergana');



create table products(
    id int PRIMARY KEY,
    name VARCHAR(50),
    price numeric
);

INSERT INTO products (id, name, price) VALUES
(1, 'Laptop', 900),
(2, 'Mouse', 15),
(3, 'Keyboard', 30),
(4, 'Monitor', 250),
(5, 'Phone', 650),
(6, 'Headphones', 50),
(7, 'Webcam', 75),
(8, 'Printer', 180),
(9, 'Tablet', 400),
(10, 'USB Flash', 12),
(11, 'External HDD', 120),
(12, 'Power Bank', 40),
(13, 'Smart Watch', 220),
(14, 'Router', 90),
(15, 'Microphone', 110);



create table orders(
    id int PRIMARY KEY,
    customer_Id int REFERENCES customers(id),
    order_date DATE
);

INSERT INTO orders (id, customer_Id, order_date) VALUES
(1, 1, '2024-10-01'),
(2, 2, '2024-10-02'),
(3, 3, '2024-10-03'),
(4, 4, '2024-10-04'),
(5, 5, '2024-10-05'),
(6, 6, '2024-10-06'),
(7, 7, '2024-10-07'),
(8, 8, '2024-10-08'),
(9, 9, '2024-10-09'),
(10, 10, '2024-10-10'),
(11, 11, '2024-10-11'),
(12, 12, '2024-10-12'),
(13, 13, '2024-10-13'),
(14, 14, '2024-10-14'),
(15, 15, '2024-10-15');



create table order_items(
    id int PRIMARY KEY,
    order_Id int REFERENCES orders(id),
    product_Id int REFERENCES products(id),
    quantity int
);

INSERT INTO order_items (id, order_Id, product_Id, quantity) VALUES
(1, 1, 1, 1),
(2, 1, 2, 2),
(3, 2, 5, 1),
(4, 3, 4, 2),
(5, 4, 3, 1),
(6, 5, 6, 3),
(7, 6, 7, 1),
(8, 7, 8, 1),
(9, 8, 9, 2),
(10, 9, 10, 5),
(11, 10, 11, 1),
(12, 11, 12, 2),
(13, 12, 13, 1),
(14, 13, 14, 1),
(15, 14, 15, 2);


1 - qism

select * from customers;
select * from customers where city = 'Tashkent';
select * from products where price > 100;
select * from products order by price DESC;
select DISTINCT city from customers;
select * from orders order by order_date DESC LIMIT 10;

2-qism

select count(id) from orders;
select count(id) , city from customers GROUP BY city;
select product_Id, count(order_Id) from order_items GROUP BY product_Id ORDER BY product_Id;
select MIN(price) from products;
select MAX(price) from products;
select SUM(quantity) from order_items;
select product_Id from order_items where quantity>1 GROUP BY order_items.product_Id order by product_Id;

3-qism

select id, cutomers.full_name from orders INNER JOIN customers on orders.customer_Id = customers.id;
select order_Id, name , quantity from order_items INNER JOIN products on order_items.product_Id = products.id;
select order_Id, name , price*quantity from order_items INNER JOIN products on order_items.product_Id = products.id;
select customers.full_name, order_date from orders inner join customers on orders.customer_Id = customers.id;
select order_Id, name  from order_items INNER JOIN products on order_items.product_Id = products.id where price*quantity > 1000;


