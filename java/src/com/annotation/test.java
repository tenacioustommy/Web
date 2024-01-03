package com.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// @SuppressWarnings("All")
public class test extends Object {
    // 重写
    @Override
    @Myannotation(age = 18, name = "sda", schools = { "Asd", "Asd" })
    public String toString() {
        return super.toString();
    }

    @Deprecated
    public static void test1() {
        System.out.println("deprecated");
    }

    public static void main(String[] args) {
        test1();
    }
}

// 自定义注解
// 四个元注解，target只能用在method上
@Target(value = { ElementType.METHOD, ElementType.TYPE })
// 注解何时有效 runtime>class>source
@Retention(value = RetentionPolicy.RUNTIME)
// 是否生成再javdoc中
// @Documented
// 子类继承父类的注解
@Inherited
@interface Myannotation {
    String name() default "";

    String[] schools();

    int age();
}
