package com.taobao.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin
public class LogoutController {
    @PostMapping("/logout")
    public void Logout(HttpSession session) {
        session.invalidate();//清除Session;
    }
}
