package com.taobao.app.mapper;

import com.taobao.app.entity.Search;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
@Mapper
public interface SearchResultMapper {
    ArrayList<Search> SearchResult(String keyword);
}
