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
	oa_state INT,	#状态  紧急 2 或正常 0 或重要 1
	oa_date  DATETIME,	#创建日期
	oa_work VARCHAR(32),
	uname VARCHAR(32),
	oa_now VARCHAR(32), #1出差申请 2 入职申请 3离职申请 4请假申请
	oa_detail VARCHAR(500)
	
);
CREATE TABLE oa_dues(
	dues_id INT PRIMARY KEY AUTO_INCREMENT, #流程编号
	dues_title VARCHAR(32),
	uname VARCHAR(32),
	dues_date  DATETIME, #申请日期
	dues_price DOUBLE, #申请金额
	dues_state INT,	#状态  紧急 2 正常 0 重要 1
	dues_time  INT,#时间 1天之内 1 三天之内 3 立刻马上 0
	dues_work VARCHAR(32),
	dues_now VARCHAR(8), #1 费用申请 2 借款申请 3报销申请
	dues_reason VARCHAR(500) #费用报销原因
);
CREATE TABLE oa_notice(
	affairs_leave VARCHAR(32),
	affairs_enter  VARCHAR(32),
	affairs_goout  VARCHAR(32),
	affairs_askleave VARCHAR(32)
);
CREATE TABLE oa_item(
	item_title VARCHAR(64), #请求标题
	item_id  INT PRIMARY KEY AUTO_INCREMENT, #流程编号
	item_state INT,	#状态  紧急 2 或正常 0 或重要 1
	item_date   DATETIME,	#创建日期
	item_detail VARCHAR(500),
	uname VARCHAR(32),
	item_work VARCHAR(32),  #1项目立项申请 2项目经理变更流程 3项目单据快递确认流程
	item_price DOUBLE,    #启动资金
	item_time  INT  #项目工期 1 一个月 2 半年之内 3 1年之内
)
