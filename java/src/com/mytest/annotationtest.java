package com.mytest;

import java.lang.reflect.Method;

public class annotationtest {
    @mytest
    public void test1() {
        System.out.println("--test1--");
    }

    public void test2() {
        System.out.println("--test2--");
    }

    @mytest
    public void test3() {
        System.out.println("--test3--");
    }

    public void test4() {
        System.out.println("--test4--");
    }

    public static void main(String[] args) throws Exception {
        annotationtest a = new annotationtest();
        Class c = annotationtest.class;
        Method[] methods = c.getDeclaredMethods();
        for (Method method : methods) {
            if (method.isAnnotationPresent(mytest.class)) {
                method.invoke(a);
            }
        }
    }
}
