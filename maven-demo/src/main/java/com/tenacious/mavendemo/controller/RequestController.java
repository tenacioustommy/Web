package com.tenacious.mavendemo.controller;

import com.tenacious.mavendemo.pojo.Result;
import com.tenacious.mavendemo.pojo.User;

import jakarta.websocket.server.PathParam;

import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

// 所有返回转换成json作为响应数据
@RestController
public class RequestController {

    @RequestMapping("/simpleparam")
    public Result simpleparam(@RequestParam(name = "name") String usrname, Integer age) {
        System.out.println(usrname + ":" + age);
        return Result.success(age);
    }

    @RequestMapping("/array")
    public Result arrayparam(String[] hobby) {
        System.out.println(Arrays.toString(hobby));
        return Result.success();
    }

    @RequestMapping("/listarray")
    public Result listparam(@RequestParam List<String> hobby) {
        System.out.println(hobby);
        return Result.success(hobby);
    }

    @RequestMapping("/dateparam")
    public String dataparam(@DateTimeFormat(pattern = "yyyy-MM--dd HH:mm:ss") LocalDateTime time) {
        System.out.println(time);
        return "OKlist";
    }

    @RequestMapping("/json")
    public String jsonparam(@RequestBody User user) {
        System.out.println(user);
        return "OKlist";
    }

    @RequestMapping("/path/{id}/{name}")
    public String pathparam(@PathVariable Integer id, @PathVariable String name) {
        System.out.println(id);
        System.out.println(name);
        return "OKpath";
    }
}
