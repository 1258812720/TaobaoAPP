package com.taobao.app.service.login;

import com.taobao.app.entity.User;
import com.taobao.app.entity.UserInfo;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {
    int Login(String user_id,String user_pwd);
    String getUserID(String userName);
    UserInfo Check(String userID);
}
