package com.taobao.app.uitls;

import org.apache.commons.io.input.ReaderInputStream;

import java.io.*;

public class FileWriterUtils {
    protected static final String ENCODE = "UTF-8";

    public static void write(String path, String content) {
        try {
            File file = new File(path);
            PrintStream ps = new PrintStream(file, ENCODE);
            ps.append(content);
            ps.flush();
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void reader(String path) {
        File file = new File(path);
        try {
            if (file.exists()) {
                FileReader fr = new FileReader(file);
                BufferedReader br = new BufferedReader(fr);//缓存区
                String str;
                while ((str = br.readLine()) != null) {
                    System.out.println("数据：" + str);
                }
            } else {
                throw new FileNotFoundException("文件找不到");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
