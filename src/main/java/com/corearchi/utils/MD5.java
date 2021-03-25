package com.corearchi.utils;


import org.apache.commons.codec.digest.DigestUtils;
import org.junit.Test;

import java.security.MessageDigest;

//MD5加解密
public class MD5 {

    // 带秘钥加密
    public static String md5(String text, String key) throws Exception {
        // 加密后的字符串
        return DigestUtils.md5Hex(text + key);
    }

    // 不带秘钥加密
    public static String md52(String text) throws Exception {
        // 加密后的字符串
        return DigestUtils.md5Hex(text);
    }

    // 根据传入的密钥进行验证
    public static boolean verify(String text, String key, String md5) throws Exception {
        String md5str = md5(text, key);
        if (md5str.equalsIgnoreCase(md5)) {
            System.out.println("MD5验证通过");
            return true;
        }
        return false;
    }

    @Test
    public void test() {
        String s = "123";
        String k = "ABC";
        try {
            String s1 = md5(s, k);
            System.out.println("加密的：" + s1);
            System.out.println("验证:" + verify(s, k, s1));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
