package com.taobao.app.controller;


import com.taobao.app.entity.Depository;
import com.taobao.app.entity.User;
import com.taobao.app.entity.UserInfo;
import com.taobao.app.service.login.LoginServiceImpl;
import com.taobao.app.service.search.SearchServiceImpl;
import com.taobao.app.uitls.FilterSpecialChar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.view.RedirectView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.LinkedList;

@Controller
public class SearchController {
    private static final String ENCODE = "UTF-8";

    @Autowired
    private SearchServiceImpl service;
    @Autowired
    private LoginServiceImpl loginService;

    @GetMapping("/search")
    public String search(HttpSession session, HttpServletRequest request, Model view, HttpServletResponse response) {
        try {
            request.setCharacterEncoding(ENCODE);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        try {
            HashMap<String, String> userInfo = (HashMap) session.getAttribute("userInfo");
            int index = 0;
            if (userInfo != null) {
                if (loginService.Login(userInfo.get("username"), userInfo.get("password")) != 0) {
                    String id = loginService.getUserID(userInfo.get("username"));
                    UserInfo user = loginService.Check(id);
                    String word = request.getParameter("word");//搜索关键字
                    String page = request.getParameter("page");//页码
                    String type = request.getParameter("type");//类型
                    word = FilterSpecialChar.Special(word);
                    if (!"".equalsIgnoreCase(word)) {
                        if (page != null) {
                            index = FilterSpecialChar.toNum(page);
                        }
                        LinkedList<Depository> list = service.search(word, type, index);
                        for (Depository i :
                                list) {
                            System.out.print("获取元素" + i + "\t");
                        }
                        view.addAttribute("result", list);
                        view.addAttribute("title", word);
                        view.addAttribute("userInfo", user);
                        view.addAttribute("shop", null);
                        return "search/index";
                    } else {
                        response.sendRedirect("/");
                    }
                }
            } else {
                return "./login";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return null;
    }
}
