package com.reflection;

import java.lang.reflect.Constructor;
import com.annotation.test;

class User {
    String name;
    int id;
    int age;

    public User() {

    }

}

public class test2 {
    public void testgetcons() {

    }

    public static void main(String[] args) {
        Class c1 = User.class;
        System.out.println(c1.getName());
        Class c = test.class;
        // 获得全部的constructor
        Constructor[] constructors = c.getDeclaredConstructors();
        for (Constructor constructor : constructors) {
            System.out.println(constructor.getName());
        }

        // Class c2 = Class.forName("src.com.reflection.User");
    }
}
