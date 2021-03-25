package com.taobao.app.uitls;
//文字转拼音
//拼音转文字

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;
import org.junit.Test;

public class PinYin4j {
    private static String transfer(String character) {
//        if(!"".equalsIgnoreCase(character){
//            char[] ch = character.toCharArray();
//            int len = ch.length;
//            StringBuffer sb = new StringBuffer();
//            for (int i = 0; i < len; i++) {
//                sb.append();
//            }
//        }
        return null;
    }

    public static String byFirstChar(String str) throws BadHanyuPinyinOutputFormatCombination {
        StringBuilder con = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char at = str.charAt(i);
            String[] strs = PinyinHelper.toHanyuPinyinStringArray(at);
            if (strs != null) {
                con.append(strs[0].charAt(0));
            } else {
                con.append(at);
            }
        }
        return con.toString().toLowerCase();
    }
}
