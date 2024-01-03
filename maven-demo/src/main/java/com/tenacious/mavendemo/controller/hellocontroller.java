package com.tenacious.mavendemo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class hellocontroller {
    @RequestMapping("/hello")
    public String hello() {
        System.out.println("hello world");
        return "hello world";
    }
}
