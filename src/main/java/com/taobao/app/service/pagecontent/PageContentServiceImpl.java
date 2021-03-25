package com.taobao.app.service.pagecontent;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.taobao.app.entity.*;
import com.taobao.app.mapper.PageContentMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.LinkedList;

@Service
public class PageContentServiceImpl implements PageContentService {

    @Resource
    private PageContentMapper pageContentMapper;

    @Override
    public ArrayList<Picture> getPicture(int id) {
        return pageContentMapper.getPicture(id);
    }

    @Override
    public LinkedList<Text> getLeft() {
        return pageContentMapper.getLeft();
    }

    @Override
    public LinkedList<Img> getImages() {
        return pageContentMapper.getImages();
    }

    @Override
    public LinkedList<Tell> getTell() {
        return pageContentMapper.getTell();
    }

    @Override
    public LinkedList<Tell> getPush() {
        return pageContentMapper.getPush();
    }

    @Override
    public LinkedList<Table> getMedia(@Param("table") String table) {
        return pageContentMapper.getMedia(table);
    }

    @Override
    public Img getBanner() {
        return pageContentMapper.getBanner();
    }

    @Override
    public LinkedList<More> getMore() throws Exception {
        return pageContentMapper.getMore();
    }

    @Override
    public LinkedList<Picture> getSwiper() throws Exception {
        return pageContentMapper.getSwiper();
    }
}
