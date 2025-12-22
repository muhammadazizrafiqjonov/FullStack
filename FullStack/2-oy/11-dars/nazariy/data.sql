create table Course(
    id serial PRIMARY KEY,
    name VARCHAR(30),
    price DECIMAL,
    duration int,
    duration_hours int
);

create table students(
    id serial PRIMARY KEY,
    name VARCHAR(50),
    age int,
    password int,
    photo VARCHAR(255),
    phone int
);

create table Teachers(
    id serial PRIMARY KEY,
    name VARCHAR(30),
    age int,
    photo VARCHAR(255),
    experience int,
    skills VARCHAR(255)
);

create table Groups(
    id serial PRIMARY KEY,
    name VARCHAR(30),
    teacher_Id int REFERENCES Teachers(id),
    course_Id int REFERENCES Course(id)
);


create table studentGroup(
    id serial PRIMARY KEY,
    student_Id int REFERENCES students(id),
    group_Id int REFERENCES Groups(id)
);


