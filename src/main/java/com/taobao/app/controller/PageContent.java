package com.taobao.app.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.taobao.app.entity.Picture;
import com.taobao.app.service.pagecontent.PageContentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.LinkedList;

// 页面内容核实
@RestController
@CrossOrigin
@RequestMapping("/media")
public class PageContent {
    @Resource
    private PageContentServiceImpl pageContentService;

    //大轮播图图片
    @RequestMapping(value = "/getPicture", method = RequestMethod.POST)
    public ArrayList<Picture> getPicture(HttpServletRequest request) {
        //字符串转数字
        int num = Integer.parseInt(request.getParameter("num"));
        ArrayList<Picture> arrayList;
        try {
            if (num > 6 || num < 0) {
                return null;
            } else {
                arrayList = pageContentService.getPicture(num);
            }
        } catch (Exception e) {
            return null;
        }
        return arrayList;
    }

    private static final int COUNT = 2;//每条请求数量

    @GetMapping("/swiper")
    public LinkedList<Picture> test(HttpServletRequest request) {
        String page = request.getParameter("page");
        try {
            LinkedList<Picture> swiper = new LinkedList<>();
            if (!"".equalsIgnoreCase(page)) {
                int p = Integer.parseInt(page);
                p = p > 0 ? Integer.parseInt(page) : 1;
                PageHelper.startPage(p, COUNT);
                swiper = pageContentService.getSwiper();
            }
            return swiper;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
