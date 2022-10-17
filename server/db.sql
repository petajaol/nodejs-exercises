drop database if exists tasks;

create database tasks;
use tasks;
create table task (
  id int primary key auto_increment,
  description varchar(255) not null
);

insert into task (description) values ("testtask1");
insert into task (description) values ("testtask2");