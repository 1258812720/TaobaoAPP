package com.taobao.app.uitls;

import java.util.regex.Pattern;

//去除特殊字符类
public class FilterSpecialChar {
    private static final String REG = "[`~!@#$%^&*()+=|{}:;\\\\\\\\[\\\\\\\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？']";
    private static final String NUM = "^\\d+$ 或 ^[1-9]\\d*|0$";

    public static String Special(String str) {
        str = str.replaceAll(" ", "");//过滤空格
        str = Pattern.compile(REG).matcher(str).replaceAll("").trim();
        return str;
    }

    public static int toNum(String num) {
        System.out.println("page" + num);
        num = Special(num);
        if ("".equalsIgnoreCase(num)) {
            return 0;
        }
        try {
            num = Pattern.compile(NUM).matcher(num).replaceAll("");
            return Integer.parseInt(num);
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        return 0;
    }
}
