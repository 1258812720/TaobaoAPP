package com.taobao.app.controller;

import com.taobao.app.entity.Result;
import com.taobao.app.service.searchprev.PreviewServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedList;

@RestController
@RequestMapping("/search")
@CrossOrigin
public class SearchPreview {
    @Autowired
    private PreviewServiceImpl searchPreviewService;

    @RequestMapping(value = "/prev", method = RequestMethod.POST)
    public LinkedList<Result> SearchPreview(HttpServletRequest request) {
        String keyword = request.getParameter("keyword");
        if (!keyword.equalsIgnoreCase("")) {
            LinkedList<Result> results = searchPreviewService.getResult(keyword);
            return results;
        } else {
            return null;
        }
    }
}
