package com.taobao.app.uitls;

import com.taobao.app.entity.Depository;
import org.junit.Test;

public class AppTest {
    @Test
    public void test(){
        String test="0001%%";
        int s = FilterSpecialChar.toNum(test);
        System.out.println(s);
    }
}
