package com.taobao.app.aspect;


import com.taobao.app.uitls.FileWriterUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Component
@Aspect
public class WebLogAspect {
    private static final String PATH = "F:\\log.text";

    //定义切入点位置
    @Pointcut("within(com.taobao.app.controller.TaoBaoController)+")
    public void start() {
        System.out.println("开始执行");
    }

    //前置通知
    @Before("start()")
    public void before(JoinPoint joinPoint) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        assert attributes != null;
        HttpServletRequest request = attributes.getRequest();
        Cookie[] cookies = request.getCookies();
        StringBuilder info = new StringBuilder("Data");
        FileWriterUtils.write(PATH, new String(info));
        System.out.println("前置");
    }

    //后置通知
    @After("within(com.taobao.app.controller.TaoBaoController)+")
    public void end() {
        System.out.println("结束");
    }
}
