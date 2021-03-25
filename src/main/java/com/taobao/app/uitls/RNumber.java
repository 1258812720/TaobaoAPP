package com.taobao.app.uitls;


import org.junit.Test;

import java.util.Random;

//生成指定位数的随机数
public class RNumber {
    public static Integer get(int i) {
        Random rd = new Random();
        try {
            if (i <= 0) {
                throw new Exception("请输入合法的位数数字");
            }
            int k = i * 10;
            return rd.nextInt(k);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
