package com.taobao.app.mapper;

import com.taobao.app.entity.Depository;
import org.apache.ibatis.annotations.Mapper;

import java.util.LinkedList;

@Mapper
public interface SearchMapper {
    LinkedList<Depository> search(String word, String type);
}
