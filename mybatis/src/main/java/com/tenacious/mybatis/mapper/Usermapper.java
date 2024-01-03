package com.tenacious.mybatis.mapper;

import com.tenacious.mybatis.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper // mapper接口,自动生成接口的bean对象
public interface Usermapper {

    @Select("select * from user")
    public List<User> list();
}
