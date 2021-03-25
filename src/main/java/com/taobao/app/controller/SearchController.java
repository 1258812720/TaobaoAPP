package com.taobao.app.controller;


import com.taobao.app.entity.Depository;
import com.taobao.app.service.search.SearchServiceImpl;
import com.taobao.app.uitls.FilterSpecialChar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;
import java.io.UnsupportedEncodingException;
import java.util.LinkedList;

@Controller
public class SearchController {
    private static final String ENCODE = "UTF-8";

    @Autowired
    private SearchServiceImpl service;

    @GetMapping("/search")
    public String search(HttpServletRequest request, Model view) {
        try {
            request.setCharacterEncoding(ENCODE);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        //word 搜索关键字
        try {
            int index = 0;
            String word = request.getParameter("word");//搜索关键字
            String page = request.getParameter("page");//页码
            String type = request.getParameter("type");//类型
            word = FilterSpecialChar.Special(word);
            if (!"".equalsIgnoreCase(word)) {
                if (page!=null) {
                    index = FilterSpecialChar.toNum(page);
                }
                LinkedList<Depository> list = service.search(word, type, index);
                System.out.println(list);
                view.addAttribute("result", list);
                return "search/index";
            } else {
                return "/index";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
