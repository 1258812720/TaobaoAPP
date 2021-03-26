package com.taobao.app.uitls;
import org.junit.Test;

public class AppTest {
    private static final String PATH = "F:/log.text";

    @Test
    public void test() {
        FileWriterUtils.reader(PATH);
    }
}
