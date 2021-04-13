package com.taobao.app.service.pagecontent;


import com.taobao.app.entity.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;

@Service
public interface PageContentService {
    ArrayList<Picture> getPicture();
    LinkedList<Text> getLeft();
    LinkedList<Img> getImages();
    LinkedList<Tell> getTell();
    LinkedList<Tell> getPush();
    LinkedList<Table> getMedia(String tableName);
    Img getBanner();
    LinkedList<More> getMore() throws Exception;
    LinkedList<Picture> getSwiper() throws Exception;
    LinkedList<Push> getGoodPush();
}
