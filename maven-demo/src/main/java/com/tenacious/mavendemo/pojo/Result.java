package com.tenacious.mavendemo.pojo;

public class Result {
    Integer code;
    String msg;
    Object data;

    public Result() {

    }

    public Result(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static Result success(Object data) {
        return new Result(1, "success", data);
    }

    public static Result success() {
        return new Result(1, "success", null);
    }

    public static Result error(Object data) {
        return new Result(0, "fail", null);
    }

    @Override
    public String toString() {
        return "result()" + this.code;
    }

}
