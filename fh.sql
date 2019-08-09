SET NAMES UTF8;
DROP DATABASE IF EXISTS game;
CREATE DATABASE game CHARSET=UTF8;
USE game;
CREATE TABLE user(
    uid  INT PRIMARY KEY AUTO_INCREMENT,
    phone VARCHAR(32),
    pwd  VARCHAR(32)
);
CREATE TABLE products_game(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(64),
    titleChina VARCHAR(128),
    titleEnglish VARCHAR(128),
    tip VARCHAR(32),
    price INT,
    disc VARCHAR(8),
    is_now INT,     #1最新  0不是最新
    is_price INT    #0不优惠 1优惠
); 
CREATE TABLE products_computer(
    
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pic  VARCHAR(64),
    titleChina VARCHAR(128),
    titleEnglish VARCHAR(128),
    tip VARCHAR(32),
    price INT,
    disc VARCHAR(8),
    is_now INT,     #1最新 0不是最新
    is_price INT  #0不优惠 1 优惠
);
CREATE TABLE products_car(
    rid  INT PRIMARY KEY AUTO_INCREMENT,
    ric  VARCHAR(64),
    title VARCHAR(32),
    price INT,
    count INT,
    uid VARCHAR(32) 
);
INSERT INTO products_computer VALUES(1,"img/5.jpg","绝地求生大逃杀 PC版 大陆 bbbbbbbbbbbb","PLAYERUNKNOWN S BATTLE bbbbbbbbb","steam|中文|动作",90,"6%",1,1);
INSERT INTO products_computer VALUES(2,"img/6.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",95,"6%",1,1);
INSERT INTO products_computer VALUES(3,"img/7.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",100,"18%",1,1);




INSERT INTO products_game VALUES(1,"img/5.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",90,"6%",1,1);
INSERT INTO products_game VALUES(2,"img/6.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",95,"6%",0,1);
INSERT INTO products_game VALUES(3,"img/7.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",92,"0",1,0);
INSERT INTO products_game VALUES(4,"img/8.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",99,"6%",1,1);
INSERT INTO products_game VALUES(5,"img/10.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",100,"0",0,0);
INSERT INTO products_game VALUES(6,"img/11.jpg","绝地求生大逃杀 PC版 大陆","PLAYERUNKNOWN S BATTLE","steam|中文|动作",50,"6%",1,1);

 INSERT INTO products_computer VALUES(4,"img/8.jpg","微软Xbox","Microsoft one x","xbox",3488,"13%",1,1);
