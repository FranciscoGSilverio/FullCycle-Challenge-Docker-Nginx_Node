## Enter MySQL database:

1. docker exec -it bash db
2. mysql -uroot -p 
3. <-- type root password -->
4. show databases;
5. use nodedb;
6. create table people(id int not null auto_increment, name varchar(255), primary key(id));
7. desc people;