package com.taobao.app.controller;

import com.taobao.app.entity.*;
import com.taobao.app.service.login.LoginServiceImpl;
import com.taobao.app.service.pagecontent.PageContentServiceImpl;
import com.taobao.app.uitls.JWTUtils;
import io.jsonwebtoken.Claims;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.*;


@Controller
@EnableScheduling//开启定时
public class TaoBaoController {
    private static final String ENCODE = "UTF-8";
    @Resource
    private PageContentServiceImpl pageContentService;
    private LinkedList<Img> imgList;
    private LinkedList<Tell> push;
    @Resource
    private LoginServiceImpl loginService;

    public TaoBaoController() {
        this.imgList = new LinkedList<>();
        this.push = new LinkedList<>();
    }
    @GetMapping("/")//首页
    public String index(HttpSession session, HttpServletRequest request, Model model, HttpServletResponse response) throws Exception {
        //获取会话
        request.setCharacterEncoding(ENCODE);
        response.setCharacterEncoding(ENCODE);
        if (session.isNew()) {
            model.addAttribute("shop", "请重新登录");
            model.addAttribute("name", null);
            model.addAttribute("hide", "");
        } else {
            //保存cookie 信息
            Map<String, String> info = (HashMap) session.getAttribute("userInfo");
            Cookie[] cookies = request.getCookies();
            if (cookies.length != 1 && info != null) {
                try {
                    String token = null;
                    //验证session和token是否相同
                    for (Cookie c : cookies) {
                        if (c.getName().equalsIgnoreCase("tb_token")) {
                            token = c.getValue();
                        }
                    }
                    Claims infos = JWTUtils.Decode(token);
                    if (infos.get("u_id").toString().equalsIgnoreCase(info.get("username")) &&
                            infos.get("u_pd").toString().equalsIgnoreCase(info.get("password"))) {
                        if (loginService.Login(info.get("username"), info.get("password")) != 0) {
                            // 拉取用户信息
                            String id = loginService.getUserID(info.get("username"));
                            UserInfo userInfo = loginService.Check(id);
                            model.addAttribute("userInfo", userInfo);
                            model.addAttribute("hide", "hide");
                        } else {
                            model.addAttribute("hide", "");
                        }
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            } else {
                session.invalidate();//清除登录状态
            }
        }
        // 数据库拉取信息
        LinkedList<Text> result = pageContentService.getLeft();//结果集
        model.addAttribute("array", result);
        imgList = pageContentService.getImages();
        push = pageContentService.getPush();
        LinkedList<Table> temp = pageContentService.getMedia("type_push");
        LinkedList<Tell> tell;
        tell = pageContentService.getTell();
        // 获取banner 信息
        Img img = pageContentService.getBanner();
        //拉取猜你喜欢模块
        LinkedList<More> mores = pageContentService.getMore();
        try {
            model.addAttribute("push_one", imgList.get(0));
            model.addAttribute("push_two", imgList.get(1));
            model.addAttribute("tell", tell);
            model.addAttribute("push", push);
            model.addAttribute("type_push", temp);
            model.addAttribute("num", 1995);
            model.addAttribute("banner", img);
            model.addAttribute("more", mores);
        } catch (IndexOutOfBoundsException i) {
            i.printStackTrace();
        }
        return "index";
    }

    @GetMapping("/login")
    public String setSession(HttpSession session, HttpServletRequest request, HttpServletResponse response) {
        try {
            request.setCharacterEncoding(ENCODE);
            request.setCharacterEncoding(ENCODE);
            //获取ip地址做秘钥
            String key = session.getId();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "login";
    }

    @PostMapping("/sign_in")
    public void SignIn(HttpServletRequest request, HttpServletResponse response) {
        try {
            request.setCharacterEncoding(ENCODE);
            request.setCharacterEncoding(ENCODE);
            //获取session 防止非法登录
            HttpSession session = request.getSession();

            if (session != null) {
                String username = request.getParameter("username");
                String password = request.getParameter("password");//源码密码
                if (!"".equalsIgnoreCase(username) && !"".equalsIgnoreCase(password)) {
                    if (loginService.Login(username, password) != 0) {
                        // session 保存登录状态和时间
                        Map<String, String> m = new HashMap<>();
                        m.put("username", username);
                        m.put("password", password);
                        session.setMaxInactiveInterval(1800);//半个小时
                        session.setAttribute("userInfo", m);
                        //cookie 加密处理
                        int time = 60 * 60 * 24 * 30;
                        String token = JWTUtils.Encode(username, password);
                        Cookie cookie = new Cookie("tb_token", token);
                        cookie.setMaxAge(time);
                        response.addCookie(cookie);
                        response.getWriter().println(true);
                    } else {
                        response.getWriter().println(false);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
