package com.taobao.app.mapper;

import com.taobao.app.entity.User;
import com.taobao.app.entity.UserInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

//获取用户信息
@Mapper
public interface LoginMapper {
    int login(String user_id, String user_pwd);
    String getUserID(String userName);
    UserInfo Check(String userID);
}
