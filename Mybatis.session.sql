CREATE TABLE tb_user(
    id int comment 'ID',
    username VARCHAR(20) comment 'username',
    name VARCHAR(10) comment 'name',
    age int,
    gender char(1)
) comment 'user table';
-- @block 
SHOW TABLES;
-- @block 
ALTER TABLE tb_user
add qq varchar(11);
-- @block
INSERT INTO tb_user (id, username, name, age, gender, qq)
VALUES (
        0,
        'username:varchar',
        'name:var',
        15,
        'm',
        'qq:varchar'
    );