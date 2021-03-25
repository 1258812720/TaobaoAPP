package com.taobao.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserInfo {
    private int id;
    private String username;
    private String phone;
    private String email;
    private String tel;
    private String address;
    private String nickname;
}
