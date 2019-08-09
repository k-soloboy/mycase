SET NAMES UTF8;
DROP DATABASE IF EXISTS oa;
CREATE DATABASE oa CHARSET=UTF8;
USE oa;
CREATE TABLE oa_user(
	uid	INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),	
	upwd VARCHAR(32),
	phone INT,
	company VARCHAR(64),
	email VARCHAR(32)

);
CREATE TABLE oa_submit(
	oa_title VARCHAR(64), #请求标题
	oa_id  INT PRIMARY KEY AUTO_INCREMENT, #流程编号
	oa_user VARCHAR(32), #提交人=uname
	oa_state INT,	#状态  紧急 2 或正常 0 或重要 1
	oa_date  BIGINT	#创建日期
	
);
CREATE TABLE oa_dues(
	dues_reason VARCHAR(64), #费用报销原因
	dues_date DATE , #申请日期
	dues_price BIGINT, #申请金额
	dues_name VARCHAR(32) #申请人姓名
);
CREATE TABLE oa_affairs(
	affairs_leave VARCHAR(32),
	affairs_enter  VARCHAR(32),
	affairs_goout  VARCHAR(32),
	affairs_askleave VARCHAR(32)
);

