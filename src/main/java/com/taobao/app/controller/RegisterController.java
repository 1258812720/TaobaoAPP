package com.taobao.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletMapping;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;

@Controller
public class RegisterController {
    private static final String ENCODE = "UTF-8";
//    @Autowired
//    private RegisterService service;

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String register(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding(ENCODE);
        HttpSession httpSession = request.getSession();
        if (httpSession == null) {
            response.sendError(500);
        }
        try {
            request.setCharacterEncoding(ENCODE);

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return "app/index";
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public boolean addUser() {
        return false;
    }
}
