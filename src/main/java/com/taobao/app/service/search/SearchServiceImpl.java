package com.taobao.app.service.search;

import com.github.pagehelper.PageHelper;
import com.taobao.app.entity.Depository;
import com.taobao.app.entity.Search;
import com.taobao.app.mapper.SearchMapper;
import com.taobao.app.mapper.SearchResultMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.LinkedList;

@Service
public class SearchServiceImpl implements SearchService {
    private static final int COUNT = 10;
    @Resource
    private SearchResultMapper searchResultMapper;
    @Resource
    private SearchMapper searchMapper;

    @Override
    public ArrayList<Search> SearchResult(String keyword) {
//        searchResultMapper.SearchResult(keyword);
        return null;
    }

    @Override
    public LinkedList<Depository> search(String word, String type, int index) {
        PageHelper.startPage(index, COUNT);//分页查询
        return searchMapper.search(word, type);
    }
}
