package com.taobao.app.mapper;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.taobao.app.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;
import java.util.LinkedList;

@Mapper
public interface PageContentMapper {

    ArrayList<Picture> getPicture();

    LinkedList<Text> getLeft();

    LinkedList<Img> getImages();

    LinkedList<Tell> getTell();

    LinkedList<Tell> getPush();

    LinkedList<Table> getMedia(@Param("table") String table);

    Img getBanner();

    LinkedList<More> getMore();

    LinkedList<Picture> getSwiper();
    LinkedList<Push> getGoodPush();
}
