package com.taobao.app.mapper;

import com.taobao.app.entity.Result;
import org.apache.ibatis.annotations.Mapper;

import java.util.LinkedList;

@Mapper
public interface PriviewMapper {
    LinkedList<Result> getResult(String keyword);
}
