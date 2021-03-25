package com.corearchi.utils;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

public class BaseData {
    public static void main(String[] args) {
        byte b = 100;
        int i = b;//低转高自动转换
        byte s = (byte) i; //高转低 需要强转
        System.out.println(i + "\t" + s);

        char c = 's';
        long l = c;
        System.out.println(c + "\t" + l);

        float f = 100.111F;
        double d = f;

        System.out.println(f + "\t" + d);

        double d1 = 16846.15460444;
        float f1 = (float) d1;
        System.out.println(d1 + "\t" + f1);

        //Hash 去重
        List<String> list = new LinkedList<>();
        list.add("一号");
        list.add("一号");
        System.out.println("去重前:\t" + list);
        HashSet<String> hast = new HashSet<>();
        hast.addAll(list);
        System.out.println("去重后:\t" + hast);
    }
}
