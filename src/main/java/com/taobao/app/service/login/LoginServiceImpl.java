package com.taobao.app.service.login;

import com.taobao.app.entity.User;
import com.taobao.app.entity.UserInfo;
import com.taobao.app.mapper.LoginMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Component
@Service
public class LoginServiceImpl implements LoginService {
    @Resource
    private LoginMapper loginMapper;

    @Override
    public int Login(String user_id, String user_pwd) {
        return loginMapper.login(user_id, user_pwd);
    }

    //获取用户id
    @Override
    public String getUserID(String userName) {
        return loginMapper.getUserID(userName);
    }

    @Override
    public UserInfo Check(String userName) {
        //和数据库的验证
        return loginMapper.Check(userName);
    }
}
