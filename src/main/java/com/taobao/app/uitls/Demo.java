package com.taobao.app.uitls;

import org.springframework.beans.factory.annotation.Value;

import javax.annotation.Resource;
import java.lang.reflect.Field;

public class Demo {
    protected static int i = 100;

    public static void run() {

        JBD[] jbds = JBD.values();
        for (JBD jbd : jbds) {
            System.out.println(jbd);
        }
    }

    public static void main(String[] args) {
        run();
        try {
            Class<?> name = Class.forName("com.taobao.app.uitls.fanshe");
            Field i = name.getDeclaredField("i");
            i.setAccessible(true);//解除私有权限
            fanshe instance = (fanshe) name.newInstance();//实例化对象
            instance.get();
            System.out.println("变量值"+i.get(i));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

class fanshe {
    @Resource
    @Value("700")
    private static int i;
    private final String name = "单位户";

    public void get() {
        System.out.println("内置方法"+Demo.i);
    }
}

enum JBD {
    板凳, 桌子, 椅子
}


