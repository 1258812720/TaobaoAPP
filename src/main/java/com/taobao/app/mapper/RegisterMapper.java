package com.taobao.app.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RegisterMapper {
    int addUser();
}
